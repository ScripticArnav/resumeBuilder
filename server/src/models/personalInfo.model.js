import mongoose, { Schema } from "mongoose";

const personalInfoSchema = new Schema({
  firstname: { 
    type: String, 
    required: true 
  },
  lastname: { 
    type: String, 
    required: true 
  },
  city: { 
    type: String, 
    required: true 
  },
  province: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  linkedin: { 
    type: String, 
    required: true 
  },
  github: { type: String },
  codechef: { type: String },
  codeforces: { type: String },
  leetcode: { type: String },
  atcoder: { type: String },
  photo: { type: String },
}, {timestamps: true});

export const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);
