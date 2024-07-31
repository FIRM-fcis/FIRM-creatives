import User from "../DB/models/user.js";
import { createCustomError } from "../middlewares/errors/customError.js";

export const getAllUsers = async () => {
  const users = await User.find();

  // return the users without the password field
  return users.map((user) => {
    const { password, emailVerificationToken, emailVerified, ...rest } = user._doc;
    return rest;
  });
};

export const getUserById = async (userId) => {
  // check if the userId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (
    userId.length !== 24 &&
    !(userId instanceof Uint8Array) &&
    isNaN(userId)
  ) {
    throw createCustomError("Invalid user id", 400);
  }

  const user = await User.findById(userId);

  if (!user) {
    throw createCustomError("User not found", 404);
  }

  // return the user without the password field
  const { password, emailVerificationToken, emailVerified, ...rest } = user._doc;

  return rest;
};
