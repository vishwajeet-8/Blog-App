import express from "express";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";

const app = express();

app.use(express.json());

app.use("/api", postsRoute);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
