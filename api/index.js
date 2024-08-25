import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
