import mongoose from "mongoose";

// Make a Supplier interface
const SupplierSchema = new mongoose.Schema({
  supplierName: { type: String, required: true, unique: true },
});

export const SupplierModel = mongoose.model("Supplier", SupplierSchema);
