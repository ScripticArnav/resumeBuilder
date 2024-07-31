import express from 'express';
import {
  createTechnicalSkill,
  getTechnicalSkills,
  getTechnicalSkillById,
  updateTechnicalSkill,
  deleteTechnicalSkill,
} from '../controllers/technicalSkillController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create a new technical skill
router.post('/', verifyJWT, createTechnicalSkill);

// Get all technical skills
router.get('/', verifyJWT, getTechnicalSkills);

// Get technical skill by ID
router.get('/:id', verifyJWT, getTechnicalSkillById);

// Update a technical skill
router.put('/:id', verifyJWT, updateTechnicalSkill);

// Delete a technical skill
router.delete('/:id', verifyJWT, deleteTechnicalSkill);

export default router;
