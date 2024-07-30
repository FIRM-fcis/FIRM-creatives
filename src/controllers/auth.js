import * as authService from "../services/auth.js";

export const signUpUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await authService.signUpUser(userData);

        return res.status(201).json({
            message: "User signed up successfully",
            body: newUser,
            status: 201,
        });
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const token = await authService.loginUser(userData);

        return res.status(200).json({
            message: "User logged in successfully",
            body: {
                "access-token": token,
            },
            status: 200,
        });
    } catch (error) {
        next(error);
    }
};