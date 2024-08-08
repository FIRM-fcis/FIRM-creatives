import Project from "../DB/models/project.js";
import { createCustomError } from "../middlewares/errors/customError.js";
import { v4 as uuid } from "uuid";
const ProjectPrefix = 'PROJECT'

export const createProject = async (projectData) => {
    const projectID = `${ProjectPrefix}-${uuid()}`;
    const { title } = projectData;

    // check if the project already exists
    const foundProject = await Project.findOne({
        title,
    });

    if (foundProject) {
        throw createCustomError("Project already exists", 400, null);
    }

    // create a new project
    const project = await Project.create({
        projectID,
        ownerID: "1",
        title,
        ...projectData
    });

    return project;
}

export const getProjectById = async (projectId, res, next) => {
    try {
        const project = await Project.findOne({ projectID });
        if (!project) {
            return res.status(404).json(createCustomError('Project not found'));
        }
        return project;
    } catch (error) {
        next(error);
    }
}

export const updateProject = async (projectID, projectData, res, next) => {
    try {
        const project = await Project.findOne({ projectID });
        if (!project) {
            return res.status(404).json(createCustomError('Project not found'));
        }
        const { title, description, tools, tags, openToBeSaved } = projectData;
        const images = projectData.files.images.map((image) => image.path);
        const videos = projectData.files.videos.map((video) => video.path);
        project.title = title ? title : project.title;
        project.description = description ? description : project.description;
        if (tools.lenght > 0) {
            project.tools.push(tools);
        }
        if (tags.lenght > 0) {
            project.tags.push(tags);
        }
        project.openToBeSaved = openToBeSaved ? openToBeSaved : project.openToBeSaved;

        if (images.lenght > 0) {
            project.images.push(images);
        }
        if (videos.lenght > 0) {
            project.videos.push(videos);
        }
        await project.save();
        return project;
    }
    catch (error) {
        next(error);
    }
}

export const deleteProject = async (projectID, res, next) => {
    try {
        const project = await Project.findOne({ projectID });
        if (!project) {
            return res.status(404).json(createCustomError('Project not found'));
        }
        await project.remove();
    } catch (error) {
        next(error);
    }
}

