import * as authService from "../services/auth.js";

export const signUpUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await authService.signUpUser(userData, req);

        return res.status(201).json({
            message: "User signed up successfully, please check your email to verify your account",
            body: newUser ? newUser : null,
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

export const verifyEmail = async (req, res, next) => {
    try {

        const token = req.params.token;
        await authService.verifyEmail(token);

        return res.status(200).json({
            message: "Email verified successfully",
            body: null,
            status: 200,
        });
    } catch (error) {
        next(error);
    }
};