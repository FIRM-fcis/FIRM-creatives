import User from "../DB/models/user.js";
import FollowingFollowers from "../DB/models/following_followers.js";
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

export const followUser = async (followingId, followerId) => {
  // check if the followingId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (followingId.length !== 24 && !(followingId instanceof Uint8Array) && isNaN(followingId)) {
    throw createCustomError("Invalid following id", 400, null);
  }

  // check if the followerId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (followerId.length !== 24 && !(followerId instanceof Uint8Array) && isNaN(followerId)) {
    throw createCustomError("Invalid follower id", 400, null);
  }

  // check if the followingId is the same as the followerId
  if (followingId === followerId) {
    throw createCustomError("You can't follow yourself!!", 400, null);
  }

  // check if the followingId is already being followed by the followerId
  const followingFollowers = await FollowingFollowers.find({ followingId, followerId });

  if (followingFollowers.length > 0) {
    throw createCustomError("You are already following this user!!", 400, null);
  }

  // create a new following_followers document
  const newFollowingFollower = new FollowingFollowers({ followingId, followerId });

  // save the new following_followers document
  await newFollowingFollower.save();

  // increment the following count of the followerId
  await User.updateOne({ _id: followerId }, { $inc: { following: 1 } });

  // increment the followers count of the followerId
  await User.updateOne({ _id: followingId }, { $inc: { followers: 1 } });
};

export const unfollowUser = async (followingId, followerId) => {
  // check if the followingId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (followingId.length !== 24 && !(followingId instanceof Uint8Array) && isNaN(followingId)) {
    throw createCustomError("Invalid following id", 400, null);
  }

  // check if the followerId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (followerId.length !== 24 && !(followerId instanceof Uint8Array) && isNaN(followerId)) {
    throw createCustomError("Invalid follower id", 400, null);
  }

  // check if the followingId is the same as the followerId
  if (followingId === followerId) {
    throw createCustomError("You can't unfollow yourself!!", 400, null);
  }

  // check if the followingId is not being followed by the followerId
  const followingFollowers = await FollowingFollowers.find({ followingId, followerId });

  if (followingFollowers.length === 0) {
    throw createCustomError("You are not following this user!!", 400, null);
  }

  // delete the following_followers document
  await FollowingFollowers.deleteOne({ followingId, followerId });

  // decrement the following count of the followerId
  await User.updateOne({ _id: followerId }, { $inc: { following: -1 } });

  // decrement the followers count of the followerId
  await User.updateOne({ _id: followingId }, { $inc: { followers: -1 } });
};

export const updateProfile = async (userId, userData) => {
  // Check if the userId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
  if (userId.length !== 24 && !(userId instanceof Uint8Array) && isNaN(userId)) {
    throw createCustomError("Invalid user id", 400, null);
  }

  // Check if the userId exists
  const user = await User.findOne({ _id: userId }); // Changed find() to findOne() to get a single user

  if (!user) {
    throw createCustomError("User not found", 404, null);
  }

  // Separate links from the userData
  let { links = [], ...restUserData } = userData;

  // Create a set for unique links
  const LinksSet = new Set(user.links.map(link => JSON.stringify(link)));

  links.forEach(link => {
    LinksSet.add(JSON.stringify(link));
  });

  // Convert the set back to an array of objects
  links = Array.from(LinksSet).map(linkStr => JSON.parse(linkStr));

  // Update the user profile
  const updatedUser = await User.updateOne({ _id: userId }, { ...restUserData, links });
};
