import mongoose from "mongoose";

// Define the schema for the user model with the following fields:
// - username: a string that is required and unique
// - email: a string that is required and unique
// - password: a string that is required
// - Joining date: a date that is required and has a default value of the current date
// some data set with default values after the user is created
// - profile picture: a string that has a default value of null
// - banner picture: a string that has a default value of null
// - address: a string that has a default value of null
// - availability: a string that has a default value of null
// - following: set to zero
// - followers: set to zero

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  profilePicture: {
    type: String,
    default: null,
  },
  bannerPicture: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  availability: {
    type: String,
    default: null,
  },
  following: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Number,
    default: 0,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: {
    type: String,
    default: null,
  },
});

// Create a model for the user schema
const User = mongoose.model("User", userSchema);

// Export the user model
export default User;
