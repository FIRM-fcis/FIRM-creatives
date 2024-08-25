import * as userService from "../services/user.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(200).json({
      message: "All users fetched successfully",
      body: users,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const id = req.userId;
    const user = await userService.getUserById(userId, id);

    return res.status(200).json({
      message: "User fetched successfully",
      body: user,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
};

export const followUser = async (req, res, next) => {
  try {

    const followingId = req.params.followingId;
    const followerId = req.userId;
    await userService.followUser(followingId, followerId);

    return res.status(200).json({
      message: "User followed successfully!",
      body: null,
      status: 200,
    });

  } catch (error) {
    next(error);
  }
}

export const unfollowUser = async (req, res, next) => {
  try {
    const followingId = req.params.followingId;
    const followerId = req.userId;
    await userService.unfollowUser(followingId, followerId);

    return res.status(200).json({
      message: "User unfollowed successfully!",
      body: null,
      status: 200,
    });

  } catch (error) {
    next(error);
  }
}

export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.userId;
    await userService.updateProfile(userId, req.body);

    return res.status(200).json({
      message: "Profile updated successfully",
      body: null,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
};
