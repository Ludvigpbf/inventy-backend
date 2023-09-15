import express from "express";
import {
  createPeriod,
  getAllPeriods,
  //getPeriodByPeriodTitle, use if getting Period with PeriodTitle instead of ID
  getPeriodById,
  updatePeriodById,
  deletePeriodById,
  deletePeriodsByIds,
} from "../controllers/periodController";

const periodRouter = express.Router();

// Update the routes to your routes
periodRouter.post("/period", createPeriod);
periodRouter.get("/periods", getAllPeriods);
periodRouter.get("/supplier/:id", getPeriodById);
// Get supplier by periodTitle:
// periodRouter.get("/period/:periodTitle", getPeriodByPeriodTitle);
periodRouter.put("/period/:id", updatePeriodById);
periodRouter.delete("/period/:id", deletePeriodById);
periodRouter.delete("/periods/:ids", deletePeriodsByIds);

export default periodRouter;
