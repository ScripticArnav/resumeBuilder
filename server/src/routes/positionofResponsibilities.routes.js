import express from 'express';
import {
  createPositionOfResponsibility,
  getPositionsOfResponsibility,
  getPositionOfResponsibilityById,
  updatePositionOfResponsibility,
  deletePositionOfResponsibility,
} from '../controllers/positionsOfResponsibilityController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create a new position of responsibility entry
router.post('/', verifyJWT, createPositionOfResponsibility);

// Get all positions of responsibility entries
router.get('/', verifyJWT, getPositionsOfResponsibility);

// Get position of responsibility entry by ID
router.get('/:id', verifyJWT, getPositionOfResponsibilityById);

// Update a position of responsibility entry
router.put('/:id', verifyJWT, updatePositionOfResponsibility);

// Delete a position of responsibility entry
router.delete('/:id', verifyJWT, deletePositionOfResponsibility);

export default router;