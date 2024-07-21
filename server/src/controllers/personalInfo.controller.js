import { PersonalInfo } from "../models/personalInfo.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponce } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";

const postPersonalInfo = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    city,
    province,
    phone,
    email,
    linkedin,
    github,
    codechef,
    codeforces,
    leetcode,
    atcoder,
  } = req.body;

  if (
    [firstname, lastname, city, province, email].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(401, "personal info cannot be empty");
  }
  if (phone && phone.length < 10) {
    throw new ApiError(401, "Phone number cannot be less then 10 digits");
  }

  const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+$/;
  if (linkedin && !linkedinRegex.test(linkedin)) {
    throw new ApiError(401, "Invalid LinkedIn URL");
  }

  const codechefRegex = /^https:\/\/www\.codechef\.com\/users\/[a-zA-Z0-9_-]+$/;
  if (codechef && !codechefRegex.test(codechef)) {
    throw new ApiError(401, "Invalid Code Chef URL");
  }

  const codeforcesRegex = /^https:\/\/codeforces\.com\/profile\/[a-zA-Z0-9_]+$/;
  if (codeforces && !codeforcesRegex.test(codeforces)) {
    throw new ApiError(401, "Invalid Codeforces URL");
  }

  const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/;
  if (github && !githubRegex.test(github)) {
    throw new ApiError(401, "Invalid Github URL");
  }

  const leetcodeRegex = /^https:\/\/leetcode\.com\/[a-zA-Z0-9_-]+$/;
  if (leetcode && !leetcodeRegex.test(leetcode)) {
    throw new ApiError(401, "Invalid Leetcode URL");
  }

  const atcoderRegex = /^https:\/\/atcoder\.jp\/users\/[a-zA-Z0-9_]+$/;
  if (atcoder && !atcoderRegex.test(atcoder)) {
    throw new ApiError(401, "Invalid Leetcode URL");
  }

  let photo = null;
  const photoPath = req.files?.photo?.[0]?.path;

  // Upload photo to Cloudinary if provided
  if (photoPath) {
    photo = await uploadOnCloudinary(photoPath);
  }

  const personalInfo = await PersonalInfo.create({
    firstname,
    lastname,
    city,
    province,
    phone,
    email,
    github: null || github,
    linkedin: null || linkedin,
    codechef: null || codechef,
    codeforces: null || codeforces,
    leetcode: null || leetcode,
    atcoder: null || atcoder,
    photo: photoUrl, // Include photo URL if uploaded
  });

  const info = await PersonalInfo.findById(personalInfo._id)

  if(!info){
    throw new ApiError(500, "Something went wrong while registering the user personall information")
  }

  return res.status(201).json(new ApiResponce(200, info, "Personal Information fetched successfully"))
});

export {postPersonalInfo}
