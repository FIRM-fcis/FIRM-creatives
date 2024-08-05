const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { tools, tags } = require("../../utils/constants");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    projectID: {
        type: String,
        required: false,
    },
    ownerID: {
        type: String,
        required: false,
    },
    images: {
        type: [String],
        required: false,
    },
    videos: {
        type: [String],
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    tools: {
        type: [String],
        enum: Object.values(tools),
        required: false,
    },
    tags: {
        type: [String],
        enum: Object.values(tags),
        required: false,
    },
    openToBeSaved: {
        type: Boolean,
        required: false
    }
  },
  {
    timestamps: true,
  }
);

ProjectSchema.set("toObject", {
  getters: true,
  virtuals: true,
  flattenMaps: true,
});
ProjectSchema.set("toJSON", {
  getters: true,
  virtuals: true,
  flattenMaps: true,
});


ProjectSchema.methods.getJWT = async (doctor) => {
  let expiration_time = parseInt(CONFIG.jwt_expiration);
  let doctor_id = doctor.doctorId;
  return jwt.sign({ doctor_id, user_type: "doctor" }, CONFIG.jwt_secert_key, {
    expiresIn: expiration_time,
  }); // active for one week
};

ProjectSchema.methods.toWeb = function (lang) {
  //return only the doctor with lang
  let object = this.toObject();
  removeJSONKey(object, [
    "_id",
    "__v",
    "id",
  ]);
  return object;
};

ProjectSchema.plugin(mongoosePaginate);
ProjectSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Doctor", ProjectSchema);
