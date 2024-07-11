import mongoose from "mongoose";

const UserAuthSchema = new Schema({
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema)
