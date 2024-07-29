import { Router } from "express";
import * as userController from "../controllers/user.js";
import validate from "../middlewares/validators/validate.js";
import * as userSchemas from "../middlewares/validators/schemas/user.js";

const router = Router();

// route to get all users
router.get("/", userController.getAllUsers);

// route to sign up a new user
router.post("/auth/signup", validate(userSchemas.signUpSchema), userController.signUpUser);

// route to login a user
router.post("/auth/login", validate(userSchemas.loginSchema), userController.loginUser);

// route to get a user by id
router.get("/:userId", userController.getUserById);

export default router;
