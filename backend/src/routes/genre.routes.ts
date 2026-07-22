import { Router } from "express";
import { GenreController } from "../controllers/genre.controller";

const router = Router();
router.get("/", GenreController.getGenre);

export default router;
