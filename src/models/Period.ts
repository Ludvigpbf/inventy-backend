import mongoose from "mongoose";

const PeriodSchema = new mongoose.Schema({
  periodeTitle: { type: String, required: true, unique: true },
  periodeDate: { type: String, required: true, unique: true },
  periodeDescription: { type: String },
  periodTotalItems: { type: Number, required: true },
  periodeTotalAmount: { type: Number, required: true },
});

export const PeriodModel = mongoose.model("Period", PeriodSchema);
