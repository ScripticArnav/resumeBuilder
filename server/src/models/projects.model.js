import mongoose, { Schema } from "mongoose";

const projectsSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  description: [{ type: String, required: true }],
});

export const Project = mongoose.model("Project", projectsSchema);
