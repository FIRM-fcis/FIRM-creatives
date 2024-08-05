const ProjectSchema = require("../DB/models/project");
import project from "../DB/models/project";
import { createCustomError } from "../middlewares/errors/customError.js";
const uuid = require("uuid").v4;
const ProjectPrefix = 'PROJECT'

const createProject = async (projectData, res, next) => {
    try {
        const { title, description, tools, tags, openToBeSaved } = projectData;
        const images = projectData.files.images.map((image) => image.path);
        const videos = projectData.files.videos.map((video) => video.path);
        const ownerId = projectData.user.id;
        const projectID = `${ProjectPrefix}-${uuid()}`;
        const project = await ProjectSchema.create({
            projectID,
            ownerId,
            images,
            videos,
            title,
            description,
            tools,
            tags,
            openToBeSaved
        });
        return project;
    } catch (error) {
        next(error);
    }
}

const getProjectById = async (projectId, res, next) => {
    try {
        const project = await ProjectSchema.findOne({ projectID });
        if (!project) {
            return res.status(404).json(createCustomError('Project not found'));
        }
        return project;
    }catch (error) {
        next(error);
    }
}

const updateProject = async (projectID, projectData, res, next) => {
    try {
        const project = await ProjectSchema.findOne({ projectID });
        if (!project) {
            return res.status(404).json(createCustomError('Project not found'));
        }
        const { title, description, tools, tags, openToBeSaved } = projectData;
        const images = projectData.files.images.map((image) => image.path);
        const videos = projectData.files.videos.map((video) => video.path);
        project.title = title? title : project.title;
        project.description = description? description : project.description;
        if(tools.lenght > 0){
            project.tools.push(tools);
        }
        if(tags.lenght > 0){
            project.tags.push(tags);
        }
        project.openToBeSaved = openToBeSaved? openToBeSaved : project.openToBeSaved;

        if(images.lenght > 0){
            project.images.push(images);
        }
        if(videos.lenght > 0){
            project.videos.push(videos);
        }
        await project.save();
        return project;
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    createProject,
    getProjectById,
    updateProject
}