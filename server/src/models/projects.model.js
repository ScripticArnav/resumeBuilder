import mongoose, { Schema } from "mongoose";

const projectsSchema = new Schema({
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: [
    {
      type: String,
      required: true,
    },
  ],
  technology: [
    {
      type: String,
      required: true,
    },
  ],
  source:{
    type: String,
  },
  link:{
    type: String,
  }
});

export const Project = mongoose.model("Project", projectsSchema);
