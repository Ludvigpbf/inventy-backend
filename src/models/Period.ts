import mongoose, { Document, Schema, Model, Types } from "mongoose";

interface IPeriod extends Document {
  periodTitle: string;
  periodDate: { startDate: Date; endDate: Date };
  periodDescription?: string;
  periodTotalItems: number;
  periodTotalAmount: number;
}

// Function to get the first day of the current month (date only)
function getFirstDayOfCurrentMonth(): Date {
  const currentDate = new Date();
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);
}

// Function to get the last day of the current month (date only)
function getLastDayOfCurrentMonth(): Date {
  const currentDate = new Date();
  return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
}

const PeriodSchema = new Schema<IPeriod>({
  periodTitle: { type: String, required: true },
  periodDate: {
    startDate: { type: Date, default: getFirstDayOfCurrentMonth },
    endDate: { type: Date, default: getLastDayOfCurrentMonth },
  },
  periodDescription: { type: String },
  periodTotalItems: { type: Number, required: true },
  periodTotalAmount: { type: Number, required: true },
});

const PeriodModel: Model<IPeriod> = mongoose.model<IPeriod>(
  "Period",
  PeriodSchema
);

export default PeriodModel;
