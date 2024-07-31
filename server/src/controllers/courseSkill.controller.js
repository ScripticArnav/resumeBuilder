import { CourseworkSkill } from "../models/courseworkSkills.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create CourseworkSkill
const createCourseworkSkill = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { skill } = req.body;

  if (!Array.isArray(skill) || skill.length === 0) {
    throw new ApiError(400, "Skill must be a non-empty array of strings");
  }

  const newCourseworkSkill = await CourseworkSkill.create({
    owner,
    skill,
  });

  return res
    .status(201)
    .json(
      new ApiResponce(201, newCourseworkSkill, "CourseworkSkill created successfully")
    );
});

// Get All CourseworkSkills
const getCourseworkSkills = asyncHandler(async (req, res) => {
  const ownerId = req.user._id;
  const courseworkSkills = await CourseworkSkill.find({ owner: ownerId }).populate('owner');
  return res
    .status(200)
    .json(
      new ApiResponce(200, courseworkSkills, "CourseworkSkills fetched successfully")
    );
});

// Get CourseworkSkill By ID
const getCourseworkSkillById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const courseworkSkill = await CourseworkSkill.findById(id).populate('owner');
  if (!courseworkSkill) {
    throw new ApiError(404, "CourseworkSkill not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, courseworkSkill, "CourseworkSkill fetched successfully")
    );
});

// Update CourseworkSkill
const updateCourseworkSkill = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { skill } = req.body;

  if (!Array.isArray(skill) || skill.length === 0) {
    throw new ApiError(400, "Skill must be a non-empty array of strings");
  }

  const updatedCourseworkSkill = await CourseworkSkill.findByIdAndUpdate(
    id,
    { skill },
    { new: true }
  );

  if (!updatedCourseworkSkill) {
    throw new ApiError(404, "CourseworkSkill not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, updatedCourseworkSkill, "CourseworkSkill updated successfully")
    );
});

// Delete CourseworkSkill
const deleteCourseworkSkill = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedCourseworkSkill = await CourseworkSkill.findByIdAndDelete(id);

  if (!deletedCourseworkSkill) {
    throw new ApiError(404, "CourseworkSkill not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, deletedCourseworkSkill, "CourseworkSkill deleted successfully")
    );
});

export {
  createCourseworkSkill,
  getCourseworkSkills,
  getCourseworkSkillById,
  updateCourseworkSkill,
  deleteCourseworkSkill,
};
