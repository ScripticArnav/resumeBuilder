import express from 'express';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create a new project
router.post('/', verifyJWT, createProject);

// Get all projects
router.get('/', verifyJWT, getProjects);

// Get project by ID
router.get('/:id', verifyJWT, getProjectById);

// Update a project
router.put('/:id', verifyJWT, updateProject);

// Delete a project
router.delete('/:id', verifyJWT, deleteProject);

export default router;
