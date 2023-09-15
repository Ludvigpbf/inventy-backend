import mongoose from "mongoose";

// Make a Category interface
const CategorySchema = new mongoose.Schema({
  categoryTitle: { type: String, required: true, unique: true },
  section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
});

export const CategoryModel = mongoose.model("Category", CategorySchema);
