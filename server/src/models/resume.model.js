import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    personal_info_id: {
      type: Schema.Types.ObjectId,
      ref: "PersonalInfo",
      required: true,
    },
    education_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Education",
      },
    ],
    projects_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    coursework_skills_id: {
      type: Schema.Types.ObjectId,
      ref: "CourseworkSkill",
    },
    internship_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Internship",
      },
    ],
    technical_skills_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "TechnicalSkill",
      },
    ],
    achievements_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Achievement",
      },
    ],
    positions_of_responsibility_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "PositionsOfResponsibility",
      },
    ],
  },
  { timestamps: true }
);

export const Resume = mongoose.model("Resume", resumeSchema);
