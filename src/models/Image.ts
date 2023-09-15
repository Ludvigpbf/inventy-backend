import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  path: { type: String, required: true },
});

export const ImageModel = mongoose.model("Image", ImageSchema);
