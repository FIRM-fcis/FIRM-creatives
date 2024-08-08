import * as projectServices from "../services/project.js";

export const createProject = async (req, res, next) => {
    try {

        const projectData = req.body;
        // const ownerID = req.user.id;

        const project = await projectServices.createProject(projectData);

        return res.status(200).json({
            message: "Project created successfully!",
            body: project,
            status: 200,
        });

    } catch (error) {

        next(error);

    }
}

export const getProjectById = async (req, res) => {
    try {
        const project = await projectServices.getProjectById(req.params.projectID);
        return res.status(200).json({
            message: "Project fetched successfully",
            body: project,
            status: 200,
        });
    } catch (error) {
        res.status(400).json(createCustomError(error));
    }
}

export const updateProject = async (req, res) => {
    try {
        const project = await projectServices.updateProject(req.params.projectID, req.body);
        return res.status(200).json({
            message: "Project updated successfully",
            body: project,
            status: 200,
        });
    } catch (error) {
        res.status(400).json(createCustomError(error));
    }
}

export const deleteProject = async (req, res) => {
    try {
        const project = await projectServices.deleteProject(req.params.projectID);
        return res.status(200).json({
            message: "Project deleted successfully",
            body: project,
            status: 200,
        });
    } catch (error) {
        res.status(400).json(createCustomError(error));
    }
}