import mongoose, { Schema } from "mongoose";

const achievementsSchema = new Schema({
  achievement: {
    type: Array,
    default: []
  },
});

export const Achievement = mongoose.model("Achievement", achievementsSchema);
