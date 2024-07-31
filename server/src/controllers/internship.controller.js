import { Internship } from "../models/internship.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Internship
const createInternship = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { company, role, start_date, end_date, location, description } = req.body;

  // Validate the date format MM-YYYY
  const dateRegex = /^(0[1-9]|1[0-2])-\d{4}$/;
  if (!dateRegex.test(start_date) || !dateRegex.test(end_date)) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const newInternship = await Internship.create({
    owner,
    company,
    role,
    start_date,
    end_date,
    location,
    description,
  });

  return res
    .status(201)
    .json(
      new ApiResponce(201, newInternship, "Internship created successfully")
    );
});

// Get All Internships
const getInternships = asyncHandler(async (req, res) => {
  const ownerId = req.user._id;
  const internships = await Internship.find({ owner: ownerId }).populate('owner');
  return res
    .status(200)
    .json(
      new ApiResponce(200, internships, "Internships fetched successfully")
    );
});

// Get Internship By ID
const getInternshipById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const internship = await Internship.findById(id).populate('owner');
  if (!internship) {
    throw new ApiError(404, "Internship not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, internship, "Internship fetched successfully")
    );
});

// Update Internship
const updateInternship = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { company, role, start_date, end_date, location, description } = req.body;

  // Validate the date format MM-YYYY
  const dateRegex = /^(0[1-9]|1[0-2])-\d{4}$/;
  if ((start_date && !dateRegex.test(start_date)) || (end_date && !dateRegex.test(end_date))) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const updatedInternship = await Internship.findByIdAndUpdate(
    id,
    { company, role, start_date, end_date, location, description },
    { new: true }
  );

  if (!updatedInternship) {
    throw new ApiError(404, "Internship not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, updatedInternship, "Internship updated successfully")
    );
});

// Delete Internship
const deleteInternship = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedInternship = await Internship.findByIdAndDelete(id);

  if (!deletedInternship) {
    throw new ApiError(404, "Internship not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, deletedInternship, "Internship deleted successfully")
    );
});

export {
  createInternship,
  getInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
};
