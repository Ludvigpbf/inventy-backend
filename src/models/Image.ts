import mongoose, { Document, Schema, Model, Types } from "mongoose";

interface IImage extends Document {
  imageTitle?: string;
  imageDescription?: string;
  imagePath: string;
}

const ImageSchema = new Schema<IImage>({
  imageTitle: { type: String },
  imageDescription: { type: String },
  imagePath: { type: String },
});

const ImageModel: Model<IImage> = mongoose.model("Image", ImageSchema);

export default ImageModel;
