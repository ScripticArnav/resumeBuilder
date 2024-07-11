import mongoose, { Schema } from "mongoose";

const personalInfoSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String },
  province: { type: String },
  phone: { type: String },
  email: { type: String },
  linkedin: { type: String },
  github: { type: String },
  codechef: { type: String },
  photo: { type: String },
});

export const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);