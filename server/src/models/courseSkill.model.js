import mongoose, { Schema } from "mongoose";

const courseworkSkillsSchema = new Schema({
  skill: [{ type: String, required: true }],
});

export const CourseworkSkill = mongoose.model("CourseworkSkill", courseworkSkillsSchema);
