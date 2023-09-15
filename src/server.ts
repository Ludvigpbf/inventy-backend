import express from "express";
import cors from "cors";
import mongoose from "./db";
import multer from "multer";

import userRouter from "./routes/userRoutes";
import listRouter from "./routes/listRoutes";
import itemRouter from "./routes/itemRoutes";
import supplierRouter from "./routes/supplierRoutes";
import sectionRouter from "./routes/sectionRoutes";

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// Use the express.urlencoded middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// CORS middleware for handling cross-origin requests
app.use(cors());
const port = 3000;

// Define storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the destination folder where uploaded files will be stored
    cb(null, "./uploads/"); // You should create this "uploads" folder
  },
  filename: (req, file, cb) => {
    // Set the file name for the uploaded file
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage });

// Use the database connection in here
mongoose;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

// Define your routes
app.use("/auth", userRouter);
app.use("/list", listRouter);
app.use("/item", itemRouter);
app.use("/supplier", supplierRouter);
app.use("/section", sectionRouter);

// Error handling middleware (place it after your routes)
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
);
