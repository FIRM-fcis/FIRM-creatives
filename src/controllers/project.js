import * as prjectServices from "../services/project.js";

export const createProject = async (req, res) => {
    try {
        const { title, description, tools, tags, openToBeSaved } = req.body;
        const images = req.files.images.map((image) => image.path);
        const videos = req.files.videos.map((video) => video.path);
        const ownerId = req.user.id;
    
        const project = await prjectServices.createProject({
        title,
        description,
        tools,
        tags,
        openToBeSaved,
        images,
        videos,
        ownerId,
        });
    
        return res.status(200).json({
        message: "Project created successfully",
        body: project,
        status: 200,
        });
    } catch (error) {
        res.status(400).json(createCustomError(error));
    }
}

export const getProjectById = async (req, res) => {
    try {
        const project = await prjectServices.getProjectById(req.params.projectID);
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
        const project = await prjectServices.updateProject(req.params.projectID, req.body);
        return res.status(200).json({
        message: "Project updated successfully",
        body: project,
        status: 200,
        });
    } catch (error) {
        res.status(400).json(createCustomError(error));
    }
}