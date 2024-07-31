import { Project } from "../models/project.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create Project
const createProject = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { name, date, description, technology, source, link } = req.body;

  // Validate the date format MM-YYYY
  const dateRegex = /^(0[1-9]|1[0-2])-\d{4}$/;
  if (!dateRegex.test(date)) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const newProject = await Project.create({
    owner,
    name,
    date,
    description,
    technology,
    source,
    link,
  });

  return res
    .status(201)
    .json(
      new ApiResponce(201, newProject, "Project created successfully")
    );
});

// Get All Projects
const getProjects = asyncHandler(async (req, res) => {
  const ownerId = req.user._id;
  const projects = await Project.find({ owner: ownerId }).populate('owner');
  return res
    .status(200)
    .json(
      new ApiResponce(200, projects, "Projects fetched successfully")
    );
});

// Get Project By ID
const getProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id).populate('owner');
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, project, "Project fetched successfully")
    );
});

// Update Project
const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, date, description, technology, source, link } = req.body;

  // Validate the date format MM-YYYY
  const dateRegex = /^(0[1-9]|1[0-2])-\d{4}$/;
  if (date && !dateRegex.test(date)) {
    throw new ApiError(400, "Invalid date format. Use MM-YYYY.");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    { name, date, description, technology, source, link },
    { new: true }
  );

  if (!updatedProject) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, updatedProject, "Project updated successfully")
    );
});

// Delete Project
const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedProject = await Project.findByIdAndDelete(id);

  if (!deletedProject) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, deletedProject, "Project deleted successfully")
    );
});

export {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
