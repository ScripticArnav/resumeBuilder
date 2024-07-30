import mongoose, { Schema } from "mongoose";

const educationSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  field_of_study: { type: String, required: true },
  start_year: { type: Date, required: true },
  end_year: { type: Date, required: true },
  cgpa: { type: Number },
  percentage: { type: Number },
  location: { type: String, required: true },
});

export const Education = mongoose.model("Education", educationSchema);
