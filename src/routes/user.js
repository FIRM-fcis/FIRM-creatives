import { Router } from "express";
import * as userController from "../controllers/user.js";

const router = Router();

// route to get all users
router.get("/", userController.getAllUsers);

// route to get a user by id
router.get("/:userId", userController.getUserById);

export default router;
