import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cors from "cors";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const port = process.env.PORT || 8000;

const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog",
    format: async (req, file) => "jpg",
    public_id: (req, file) => {
      const timestamp = Date.now();
      const originalName = file.originalname.split(".")[0]; // Remove file extension
      return `${originalName}-${timestamp}`;
    },
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.path);
});

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
