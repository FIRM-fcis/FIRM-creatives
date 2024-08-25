import { Router } from "express";
import * as projectController from "../controllers/project.js";
import authorize from "../middlewares/authorize.js";
import validate from "../middlewares/validators/validate.js";
import * as projectSchemas from "../middlewares/validators/schemas/project.js";

const router = Router();

// route to get all projects
router.get("/", projectController.getAllProjects);

// route to get project by id
router.get("/:projectID", authorize, projectController.getProjectById);

// route to get project b user id
router.get("/user/:userID", projectController.getProjectByUserID);

// route to create a new project
router.post("/add", authorize, validate(projectSchemas.createProjectSchema), projectController.createProject);

// route to update project by id
router.patch("/update/:projectID", authorize, projectController.updateProject);

// route to delete project by id
router.delete("/:projectID", authorize, projectController.deleteProject);


export default router;
