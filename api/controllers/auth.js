import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res
        .status(500)
        .json("An error occurred while checking for existing user");
    }
    if (data.length) return res.status(409).json("User already exists");

    //HASH THE PASSWORD AND CREATE A USER
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error(err); // Log the error for debugging
        return res
          .status(500)
          .json("An error occurred while creating the user");
      }
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const isPasswwordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswwordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        path: "http://localhost:3000",
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "http://localhost:3000",
    })
    .status(200)
    .json("User has been deleted");
};
