import mongoose, { Document, Schema, Model, Types } from "mongoose";

interface ICategory extends Document {
  categoryId: number;
  categoryTitle?: string;
}

const CategorySchema = new Schema<ICategory>({
  categoryId: { type: Number, unique: true },
  categoryTitle: { type: String, unique: true },
});
const CategoryModel: Model<ICategory> = mongoose.model<ICategory>(
  "Category",
  CategorySchema
);

export default CategoryModel;
