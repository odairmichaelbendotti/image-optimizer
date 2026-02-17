import { Router } from "express";
import { ImageScale } from "../controller/ImageProcessorController.js";
import { upload } from "../config/multer.js";

export const routes = Router();

routes.post("/upload", upload.single("image"), ImageScale);
