import { Router } from "express";
import * as projectController from "../controllers/project.js";
import authorize from "../middlewares/authorize.js";

const router = Router();

// route to create a new project
router.post("/add", authorize, projectController.createProject);

// route to get project by id
router.get("/:projectID", authorize, projectController.getProjectById);

// route to update project by id
router.patch("/update/:projectID", authorize, projectController.updateProject);

// route to delete project by id
router.delete("/:projectID", authorize, projectController.deleteProject);

export default router;
