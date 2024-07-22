import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { postPersonalInfo } from "../controllers/personalInfo.controller.js";

const router = Router()

router.route("/personalinfo").post(upload.single('photo'), postPersonalInfo)

export default router