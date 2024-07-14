import { ApiResponce } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All the fields are required");
  }

  const existedUser = await User.findOne(email);
  if (existedUser) {
    throw new ApiError(409, "User with email already exist");
  }

  const user = await User.create({
    name: name.toLowerCase(),
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponce(200, createdUser, "User Registered Successfully"));
});


export {
    registerUser
}
