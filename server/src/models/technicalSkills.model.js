import mongoose from "mongoose";

const technicalSkillsSchema = new Schema({
    category: { type: String, required: true },
    skill: { type: String, required: true }
  });


export const TechnicalSkill = mongoose.model("TechnicalSkill", technicalSkillsSchema);
