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
