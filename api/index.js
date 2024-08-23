import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
