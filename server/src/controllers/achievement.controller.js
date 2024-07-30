import { Achievement } from "../models/achievements.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Achievement
const createAchievement = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { achievement } = req.body;

  // Set default to empty array if achievement is not provided
  const newAchievement = await Achievement.create({
    owner,
    achievement: achievement || [],
  });

  return res
    .status(201)
    .json(
      new ApiResponce(200, newAchievement, "Achievement created successfully")
    );
});

// Get All Achievements
const getAchievements = asyncHandler(async (req, res) => {
  const ownerId = req.user._id;      
  const achievements = await Achievement.find({owner: ownerId}).populate('owner');
  return res
    .status(200)
    .json(
      new ApiResponce(200, achievements, "Achievements fetched successfully")
    );
});

// Update Achievement
const updateAchievement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { achievement } = req.body;

  // Default to existing achievements if not provided
  const updatedAchievement = await Achievement.findByIdAndUpdate(
    id,
    { achievement: achievement || [] },
    { new: true }
  );

  if (!updatedAchievement) {
    throw new ApiError(404, "Achievement not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(
        200,
        updatedAchievement,
        "Achievement updated successfully"
      )
    );
});

// Delete Achievement
const deleteAchievement = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedAchievement = await Achievement.findByIdAndDelete(id);

  if (!deletedAchievement) {
    throw new ApiError(404, "Achievement not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(
        200,
        deletedAchievement,
        "Achievement deleted successfully"
      )
    );
});

export {
  createAchievement,
  getAchievements,
  getAchievementById,
  updateAchievement,
  deleteAchievement,
};
