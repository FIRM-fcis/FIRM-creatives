import * as projectServices from "../services/project.js";

export const createProject = async (req, res, next) => {
    try {

        const projectData = req.body;
        const image = req.image ? req.image.buffer : null;
        const video = req.video ? req.video.buffer : null;
        const ownerID = req.userId;;

        const project = await projectServices.createProject(projectData, ownerID, image, video);

        return res.status(200).json({
            message: "Project created successfully!",
            body: project,
            status: 200,
        });

    } catch (error) {

        next(error);

    }
}

export const getAllProjects = async (req, res, next) => {
    try {

        // get request query parameters
        const { page, limit } = req.query;

        const projects = await projectServices.getAllProjects(page, limit);

        return res.status(200).json({
            message: "Projects fetched successfully",
            body: projects,
            status: 200,
        });

    } catch (error) {
        next(error);
    }
}

export const getProjectById = async (req, res, next) => {
    try {
        const projectID = req.params.projectID;

        const project = await projectServices.getProjectById(projectID);

        return res.status(200).json({
            message: "Project fetched successfully",
            body: project,
            status: 200,
        });

    } catch (error) {
        next(error);
    }
}

export const getProjectByUserID = async (req, res, next) => {
    try {

        const { userID } = req.params;

        const projects = await projectServices.getProjectByUserID(userID);

        return res.status(200).json({
            message: "Projects fetched successfully!",
            body: projects,
            status: 200,
        });

    } catch (error) {
        next(error);
    }
}

export const updateProject = async (req, res, next) => {
    try {

        const projectData = req.body;
        const projectID = req.params.projectID;
        const ownerID = req.userId;

        const project = await projectServices.updateProject(projectID, projectData, ownerID);

        return res.status(200).json({
            message: "Project updated successfully",
            body: project,
            status: 200,
        });

    } catch (error) {
        next(error);
    }
}

export const deleteProject = async (req, res, next) => {
    try {

        const projectId = req.params.projectID;
        const ownerID = req.userId;

        const project = await projectServices.deleteProject(projectId, ownerID);

        return res.status(200).json({
            message: "Project deleted successfully",
            body: project,
            status: 200,
        });

    } catch (error) {

        next(error);
    }
}