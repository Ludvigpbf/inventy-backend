import mongoose, { Document, Schema, Model, Types } from "mongoose";

interface ISupplier extends Document {
  supplierId: number;
  supplierName: string;
}
const SupplierSchema = new Schema<ISupplier>({
  supplierId: { type: Number, unique: true },
  supplierName: { type: String, required: true, unique: true },
});
const SupplierModel: Model<ISupplier> = mongoose.model<ISupplier>(
  "Supplier",
  SupplierSchema
);

export default SupplierModel;
