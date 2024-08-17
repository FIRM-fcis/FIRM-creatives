// make schema for following_followers table
import mongoose from "mongoose";

const followingFollowersSchema = new mongoose.Schema({
    followingId: {
        type: String,
        required: true,
    },
    followerId: {
        type: String,
        required: true,
    }
});

// Create a unique index for the followingId and followerId
followingFollowersSchema.index({ followingId: 1, followersId: 1 }, { unique: true });

// Create a model for the following_followers schema
const FollowingFollowers = mongoose.model("FollowingFollowers", followingFollowersSchema);

// Export the following_followers model
export default FollowingFollowers;