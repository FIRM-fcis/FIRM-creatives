import { Router } from "express";
import * as userController from "../controllers/user.js";
import authorize from "../middlewares/authorize.js";

const router = Router();

// route to get all users
router.get("/", authorize, userController.getAllUsers);

// route to get a user by id
router.get("/:userId", authorize, userController.getUserById);

export default router;

