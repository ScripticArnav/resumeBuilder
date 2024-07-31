import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
    postPersonalInfo,
    getPersonalInfos,
    getPersonalInfoById,
    updatePersonalInfo,
    deletePersonalInfo,
} from '../controllers/personalInfoController.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const router = Router()

// Create a new personal info
router.route("/").post(upload.single('photo'), verifyJWT, postPersonalInfo)

// Get all personal infos
router.get('/', verifyJWT, getPersonalInfos);

// Get personal info by ID
router.get('/:id', verifyJWT, getPersonalInfoById);

// Update personal info
router.put('/:id', verifyJWT, updatePersonalInfo);

// Delete personal info
router.delete('/:id', verifyJWT, deletePersonalInfo);

export default router