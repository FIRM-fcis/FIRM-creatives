import Project from "../DB/models/project.js";
import { createCustomError } from "../middlewares/errors/customError.js";
import { v4 as uuid } from "uuid";
const ProjectPrefix = 'PROJECT'

export const createProject = async (projectData, ownerID) => {
    const projectID = `${ProjectPrefix}-${uuid()}`;

    // check if the project already exists
    const foundProject = await Project.findOne({
        ...projectData,
    });

    if (foundProject) {
        throw createCustomError("Project already exists", 400, null);
    }

    // create a new project
    const project = await Project.create({
        projectID,
        ownerID,
        ...projectData
    });

    return project;
}

export const getProjectById = async (projectID) => {
    // check if the project exists
    const project = await Project.findOne({ projectID });

    if (!project) {
        throw createCustomError("Project not found!", 404, null);
    }

    return project;
}

export const updateProject = async (projectID, projectData, ownerID) => {
    // check if the project exists
    const project = await Project.findOne({ projectID });

    if (!project) {
        throw createCustomError("Project not found to update!", 404, null);
    }

    // check if the user is the owner of the project
    if (project.ownerID !== ownerID) {
        throw createCustomError("You are not authorized to update this project!", 403, null);
    }

    // update the project
    const updatedProject = await Project.findOneAndUpdate(
        { projectID },
        { ...projectData },
        { new: true }
    );

    return updatedProject;
}

export const deleteProject = async (projectID, ownerID) => {
    // check if the project exists
    const project = await Project.findOne({ projectID });

    if (!project) {
        throw createCustomError("Project not found to delete!", 404, null);
    }

    // check if the user is the owner of the project
    if (project.ownerID !== ownerID) {
        throw createCustomError("You are not authorized to delete this project!", 403, null);
    }

    // delete the project
    const deletedProject = await Project.findOneAndDelete({ projectID });

    return deletedProject;
}

