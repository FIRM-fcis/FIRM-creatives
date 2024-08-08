import User from "../DB/models/user.js";
import { createCustomError } from "../middlewares/errors/customError.js";

export const getAllUsers = async () => {
  const users = await User.find({}, { __v: false, password: false, emailVerificationToken: false, emailVerified: false });

  // return the users without the password field
  return users;
};

export const getUserById = async (userId, comingId) => {
  // check if the userId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (userId.length !== 24 && !(userId instanceof Uint8Array) && isNaN(userId)) {
    throw createCustomError("Invalid user id", 400, null);
  }

  // check if the req.user.id is the same as the userId
  // console.log("userId", userId);
  // console.log("comingId", comingId);

  if (userId !== comingId) {
    throw createCustomError("Unauthorized", 401, null);
  }

  const user = await User.find({ _id: userId }, { __v: false, password: false, emailVerificationToken: false, emailVerified: false });

  if (!user) {
    throw createCustomError("User not found", 404, null);
  }

  // return the user without the password field
  return user;
};
