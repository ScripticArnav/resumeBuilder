import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import { postPersonalInfo } from "../controllers/personalInfo.controller";

const router = Router()

router.route("/personalinfo").post(upload.single('photo'), postPersonalInfo)

export default router