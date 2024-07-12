import mongoose, { Schema } from "mongoose";

const achievementsSchema = new Schema({
  achievement: {
    type: String,
    required: true,
  },
});

export const Achievement = mongoose.model("Achievement", achievementsSchema);
