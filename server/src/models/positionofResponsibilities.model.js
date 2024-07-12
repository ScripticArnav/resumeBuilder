import mongoose, { Schema } from "mongoose";

const positionsOfResponsibilitySchema = new Schema({
  organization: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: [
    {
      type: String,
      required: true,
    },
  ],
});

export const PositionsOfResponsibility = mongoose.model(
  "PositionsOfResponsibility",
  positionsOfResponsibilitySchema
);
