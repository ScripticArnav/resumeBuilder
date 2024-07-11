import mongoose, {Schema} from "mongoose";

const resumeSchema = new Schema({
  user_id: { type: String, required: true },
  personal_info_id: {
    type: Schema.Types.ObjectId,
    ref: "PersonalInfo",
    required: true,
  },
  education_id: [
    { type: Schema.Types.ObjectId, ref: "Education", required: true },
  ],
  projects_id: [
    { type: Schema.Types.ObjectId, ref: "Project", required: true },
  ],
  coursework_skills_id: [
    { type: Schema.Types.ObjectId, ref: "CourseworkSkill", required: true },
  ],
  internship_id: {
    type: Schema.Types.ObjectId,
    ref: "Internship",
    required: true,
  },
  technical_skills_id: [
    { type: Schema.Types.ObjectId, ref: "TechnicalSkill", required: true },
  ],
  achievements_id: [
    { type: Schema.Types.ObjectId, ref: "Achievement", required: true },
  ],
  positions_of_responsibility_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "PositionOfResponsibility",
      required: true,
    },
  ],
});

export const Resume = mongoose.model("Resume", resumeSchema);
