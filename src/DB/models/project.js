import mongoose from 'mongoose';
import { tools, tags } from '../../utils/constants.js';

const ProjectSchema = new mongoose.Schema(
  {
    projectID: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    ownerID: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
      default: [],
    },
    videos: {
      type: [String],
      required: false,
      default: [],
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    tools: {
      type: [String],
      enum: Object.values(tools),
      required: false,
      default: [],
    },
    tags: {
      type: [String],
      enum: Object.values(tags),
      required: false,
      default: [],
    },
    openToBeSaved: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
);

// Create a model from the schema
const Project = mongoose.model('Project', ProjectSchema);

// Export the model
export default Project;
