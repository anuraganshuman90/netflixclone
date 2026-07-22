import { Router } from "express";
import { ContentController } from "../controllers/content.controllers";

const router = Router();
router.get("/", ContentController.getAllContent);
router.get("/:id", ContentController.getContentById);

export default router;
