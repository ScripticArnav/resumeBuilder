import express from 'express';
import {
  createInternship,
  getInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} from '../controllers/internshipController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create a new internship entry
router.post('/', verifyJWT, createInternship);

// Get all internship entries
router.get('/', verifyJWT, getInternships);

// Get internship entry by ID
router.get('/:id', verifyJWT, getInternshipById);

// Update an internship entry
router.put('/:id', verifyJWT, updateInternship);

// Delete an internship entry
router.delete('/:id', verifyJWT, deleteInternship);

export default router;
