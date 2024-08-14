import Project from "../DB/models/project.js";
import User from "../DB/models/user.js";
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
    const project = await Project.findOne({ projectID }, { __v: false, _id: false });

    if (!project) {
        throw createCustomError("Project not found!", 404, null);
    }

    return project;
}

export const getProjectByUserID = async (userID) => {

    // check if the userId is valid and it is 24 character hex string, 12 byte Uint8Array, or an integer
    if (userID.length !== 24 && !(userID instanceof Uint8Array) && isNaN(userID)) {
        throw createCustomError("Invalid user id", 400, null);
    }

    // check if the user already exists
    const foundUser = await User.findOne({ _id: userID });

    if (!foundUser) {
        throw createCustomError("User not found!", 404, null);
    }

    // get all projects by user id
    const projects = await Project.find({ ownerID: userID }, { __v: false, _id: false });

    return projects;
}

export const getAllProjects = async (page, limit) => {

    // const pageInt = parseInt(page);
    // const limitInt = parseInt(limit);

    // check if the page and limit are provided
    if (!page || !limit) {
        throw createCustomError("Please provide page and limit!", 400, null);
    }

    // calculate the number of documents to skip
    const offset = (page - 1) * limit;

    // get all projects
    const projects = await Project.find({}, { __v: false, _id: false }).skip(offset).limit(limit);

    return projects;
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

