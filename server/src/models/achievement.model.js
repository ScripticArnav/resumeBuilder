import mongoose, { Schema } from "mongoose";

const achievementsSchema = new Schema({
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  achievement: {
    type: string,
  },
});

export const Achievement = mongoose.model("Achievement", achievementsSchema);
