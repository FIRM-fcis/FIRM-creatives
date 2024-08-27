import { Router } from "express";
import * as projectController from "../controllers/project.js";
import authorize from "../middlewares/authorize.js";
import upload from "../utils/multer.js";

const router = Router();

// route to get all projects
router.get("/", projectController.getAllProjects);

// route to get project by id
router.get("/:projectID", authorize, projectController.getProjectById);

// route to get project b user id
router.get("/user/:userID", projectController.getProjectByUserID);

// route to create a new project
router.post("/add", authorize, upload.fields([{ name: "image" }, { name: "video", maxCount: 5 }]), projectController.createProject);

// route to update project by id
router.patch("/update/:projectID", authorize, projectController.updateProject);

// route to delete project by id
router.delete("/:projectID", authorize, projectController.deleteProject);


export default router;
