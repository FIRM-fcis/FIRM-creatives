import User from "../DB/models/user.js";
import { createCustomError } from "../middlewares/errors/customError.js";
import * as hashingOperations from "../utils/bcrypt.js";
import * as tokenOperations from "../utils/jwt.js";

export const getAllUsers = async () => {
  const users = await User.find();

  // return the users without the password field
  return users.map((user) => {
    const { password, ...rest } = user._doc;
    return rest;
  });
};

export const signUpUser = async (userData) => {
  // destructuring the userData object
  const { username, email, password, confirmPassword } = userData;

  // check if the email already exists
  const foundUser = await User.findOne({
    email,
  });

  if (foundUser) {
    throw createCustomError("User already exists", 400);
  }

  // check if the password and confirmPassword match
  if (password !== confirmPassword) {
    throw createCustomError("Passwords do not match", 400);
  }

  // hash the password
  const hashedPassword = await hashingOperations.hashPassword(password);

  // create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  // save the user to the database
  await newUser.save();
};

export const loginUser = async (userData) => {
  // destructuring the userData object
  const { email, password } = userData;

  // check if the email exists
  const foundUser = await User.findOne({
    email,
  });

  if (!foundUser) {
    throw createCustomError("User does not exist", 400);
  }

  // check if the password is correct
  const isPasswordCorrect = await hashingOperations.comparePassword(
    password,
    foundUser.password
  );

  if (!isPasswordCorrect) {
    throw createCustomError("Invalid credentials", 400);
  }

  // generate a token
  const token = tokenOperations.generateToken({
    id: foundUser._id,
    email: foundUser.email,
  });

  return token;
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
  const { password, ...rest } = user._doc;

  return rest;
};
