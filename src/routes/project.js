import { Router } from "express";
import * as projectController from "../controllers/project.js";

const router = Router();

// route to create a new project
router.post("/add", projectController.createProject);

// route to get project by id
router.get("/:projectID", projectController.getProjectById);

// route to update project by id
router.post("/update/:projectID", projectController.updateProject);

// route to delete project by id
router.delete("/:projectID", projectController.deleteProject);

export default router;
