import mongoose, { Schema } from "mongoose";

const courseworkSkillsSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  skill: [{ type: String, required: true }],
});

export const CourseworkSkill = mongoose.model(
  "CourseworkSkill",
  courseworkSkillsSchema
);
