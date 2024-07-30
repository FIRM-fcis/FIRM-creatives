import { Router } from "express";
import * as authController from "../controllers/auth.js";
import validate from "../middlewares/validators/validate.js";
import * as userSchemas from "../middlewares/validators/schemas/user.js";

const router = Router();

// route to sign up a new user
router.post("/signup", validate(userSchemas.signUpSchema), authController.signUpUser);

// route to login a user
router.post("/login", validate(userSchemas.loginSchema), authController.loginUser);

export default router;