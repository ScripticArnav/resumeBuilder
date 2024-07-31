import { TechnicalSkill } from "../models/technicalSkills.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Technical Skill
const createTechnicalSkill = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { category, skill } = req.body;

  const newTechnicalSkill = await TechnicalSkill.create({
    owner,
    category,
    skill,
  });

  return res
    .status(201)
    .json(
      new ApiResponce(201, newTechnicalSkill, "Technical Skill created successfully")
    );
});

// Get All Technical Skills
const getTechnicalSkills = asyncHandler(async (req, res) => {
  const ownerId = req.user._id;
  const technicalSkills = await TechnicalSkill.find({ owner: ownerId }).populate('owner');
  return res
    .status(200)
    .json(
      new ApiResponce(200, technicalSkills, "Technical Skills fetched successfully")
    );
});

// Get Technical Skill By ID
const getTechnicalSkillById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const technicalSkill = await TechnicalSkill.findById(id).populate('owner');
  if (!technicalSkill) {
    throw new ApiError(404, "Technical Skill not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, technicalSkill, "Technical Skill fetched successfully")
    );
});

// Update Technical Skill
const updateTechnicalSkill = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { category, skill } = req.body;

  const updatedTechnicalSkill = await TechnicalSkill.findByIdAndUpdate(
    id,
    { category, skill },
    { new: true }
  );

  if (!updatedTechnicalSkill) {
    throw new ApiError(404, "Technical Skill not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, updatedTechnicalSkill, "Technical Skill updated successfully")
    );
});

// Delete Technical Skill
const deleteTechnicalSkill = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedTechnicalSkill = await TechnicalSkill.findByIdAndDelete(id);

  if (!deletedTechnicalSkill) {
    throw new ApiError(404, "Technical Skill not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, deletedTechnicalSkill, "Technical Skill deleted successfully")
    );
});

export {
  createTechnicalSkill,
  getTechnicalSkills,
  getTechnicalSkillById,
  updateTechnicalSkill,
  deleteTechnicalSkill,
};
