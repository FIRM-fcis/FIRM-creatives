import { Router } from "express";
import * as userController from "../controllers/user.js";
import authorize from "../middlewares/authorize.js";

const router = Router();

// route to get all users
router.get("/", authorize, userController.getAllUsers);

// route to get a user by id
router.get("/:userId", authorize, userController.getUserById);

// route to follow a user
router.post("/follow/:followingId", authorize, userController.followUser);

// route to unfollow a user
router.post("/unfollow/:followingId", authorize, userController.unfollowUser);


export default router;
