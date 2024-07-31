import express from 'express';
import {
  createCourseworkSkill,
  getCourseworkSkills,
  getCourseworkSkillById,
  updateCourseworkSkill,
  deleteCourseworkSkill,
} from '../controllers/courseworkSkillController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create a new coursework skill entry
router.post('/', verifyJWT, createCourseworkSkill);

// Get all coursework skill entries
router.get('/', verifyJWT, getCourseworkSkills);

// Get coursework skill entry by ID
router.get('/:id', verifyJWT, getCourseworkSkillById);

// Update a coursework skill entry
router.put('/:id', verifyJWT, updateCourseworkSkill);

// Delete a coursework skill entry
router.delete('/:id', verifyJWT, deleteCourseworkSkill);

export default router;
