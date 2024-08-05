import { Router } from "express";
import * as projectController from "../controllers/project.js";

const router = Router();

router.post("/project/add", projectController.createProject);

router.get("/project/:projectID", projectController.getProjectById);

router.post("/projects/update/:projectID", projectController.updateProject);

router.delete("/projects/:projectID", projectController.deleteProject);

export default router;
