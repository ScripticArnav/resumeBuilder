import { PositionsOfResponsibility } from "../models/positionsOfResponsibility.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Position of Responsibility
const createPositionOfResponsibility = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { organization, role, start_date, location, description } = req.body;

  // Validate the date format MM-YYYY
  const dateRegex = /^(0[1-9]|1[0-2])-\d{4}$/;
  if (!dateRegex.test(start_date)) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const newPositionOfResponsibility = await PositionsOfResponsibility.create({
    owner,
    organization,
    role,
    start_date,
    location,
    description,
  });

  return res
    .status(201)
    .json(
      new ApiResponce(201, newPositionOfResponsibility, "Position of Responsibility created successfully")
    );
});

// Get All Positions of Responsibility
const getPositionsOfResponsibility = asyncHandler(async (req, res) => {
  const ownerId = req.user._id;
  const positions = await PositionsOfResponsibility.find({ owner: ownerId }).populate('owner');
  return res
    .status(200)
    .json(
      new ApiResponce(200, positions, "Positions of Responsibility fetched successfully")
    );
});

// Get Position of Responsibility By ID
const getPositionOfResponsibilityById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const position = await PositionsOfResponsibility.findById(id).populate('owner');
  if (!position) {
    throw new ApiError(404, "Position of Responsibility not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, position, "Position of Responsibility fetched successfully")
    );
});

// Update Position of Responsibility
const updatePositionOfResponsibility = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { organization, role, start_date, location, description } = req.body;

  // Validate the date format MM-YYYY
  const dateRegex = /^(0[1-9]|1[0-2])-\d{4}$/;
  if (start_date && !dateRegex.test(start_date)) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const updatedPositionOfResponsibility = await PositionsOfResponsibility.findByIdAndUpdate(
    id,
    { organization, role, start_date, location, description },
    { new: true }
  );

  if (!updatedPositionOfResponsibility) {
    throw new ApiError(404, "Position of Responsibility not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, updatedPositionOfResponsibility, "Position of Responsibility updated successfully")
    );
});

// Delete Position of Responsibility
const deletePositionOfResponsibility = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedPositionOfResponsibility = await PositionsOfResponsibility.findByIdAndDelete(id);

  if (!deletedPositionOfResponsibility) {
    throw new ApiError(404, "Position of Responsibility not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, deletedPositionOfResponsibility, "Position of Responsibility deleted successfully")
    );
});

export {
  createPositionOfResponsibility,
  getPositionsOfResponsibility,
  getPositionOfResponsibilityById,
  updatePositionOfResponsibility,
  deletePositionOfResponsibility,
};
