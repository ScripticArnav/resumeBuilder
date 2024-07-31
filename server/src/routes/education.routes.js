import express from 'express';
import {
  createEducation,
  getEducations,
  getEducationById,
  getEducationByStudent,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create a new education entry
router.post('/', verifyJWT, createEducation);

// Get all education entries
router.get('/', verifyJWT, getEducations);

// Get education entries by student ID
router.get('/student', verifyJWT, getEducationByStudent);

// Get education entry by ID
router.get('/:id', verifyJWT, getEducationById);

// Update an education entry
router.put('/:id', verifyJWT, updateEducation);

// Delete an education entry
router.delete('/:id', verifyJWT, deleteEducation);

export default router;
