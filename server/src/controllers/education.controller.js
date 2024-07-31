import { Education } from "../models/educationModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Helper function to validate MM-YYYY format
const isValidMonthYear = (date) => {
  const regex = /^(0[1-9]|1[0-2])-\d{4}$/;
  return regex.test(date);
};

// Create Education
const createEducation = asyncHandler(async (req, res) => {
  const student = req.user._id;
  const {
    institution,
    degree,
    field_of_study,
    start_year,
    end_year,
    cgpa,
    percentage,
    location,
  } = req.body;

  if (!isValidMonthYear(start_year) || !isValidMonthYear(end_year)) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const newEducation = await Education.create({
    student,
    institution,
    degree,
    field_of_study,
    start_year,
    end_year,
    cgpa,
    percentage,
    location,
  });

  return res
    .status(201)
    .json(
      new ApiResponce(201, newEducation, "Education created successfully")
    );
});

// Get All Educations
const getEducations = asyncHandler(async (req, res) => {
  const educations = await Education.find().populate('student');
  return res
    .status(200)
    .json(
      new ApiResponce(200, educations, "Educations fetched successfully")
    );
});

// Get Education By ID
const getEducationById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const education = await Education.findById(id).populate('student');
  if (!education) {
    throw new ApiError(404, "Education not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, education, "Education fetched successfully")
    );
});

// Get Education By Student
const getEducationByStudent = asyncHandler(async (req, res) => {
  const studentId = req.user._id;

  const educations = await Education.find({ student: studentId }).populate('student');
  return res
    .status(200)
    .json(
      new ApiResponce(200, educations, "Educations fetched successfully")
    );
});

// Update Education
const updateEducation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    institution,
    degree,
    field_of_study,
    start_year,
    end_year,
    cgpa,
    percentage,
    location,
  } = req.body;

  if ((start_year && !isValidMonthYear(start_year)) || (end_year && !isValidMonthYear(end_year))) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const updatedEducation = await Education.findByIdAndUpdate(
    id,
    {
      institution,
      degree,
      field_of_study,
      start_year,
      end_year,
      cgpa,
      percentage,
      location,
    },
    { new: true }
  );

  if (!updatedEducation) {
    throw new ApiError(404, "Education not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, updatedEducation, "Education updated successfully")
    );
});

// Delete Education
const deleteEducation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedEducation = await Education.findByIdAndDelete(id);

  if (!deletedEducation) {
    throw new ApiError(404, "Education not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, deletedEducation, "Education deleted successfully")
    );
});

export {
  createEducation,
  getEducations,
  getEducationById,
  getEducationByStudent,
  updateEducation,
  deleteEducation,
};
