import User from "../DB/models/user.js";
import { createCustomError } from "../middlewares/errors/customError.js";
import * as hashingOperations from "../utils/bcrypt.js";
import * as tokenOperations from "../utils/jwt.js";
import sendEmail from "../utils/nodemailer.js";

export const signUpUser = async (userData, req) => {
    // destructuring the userData object
    const { username, email, password } = userData;

    // check if the email already exists
    const foundUser = await User.findOne({
        email,
    });

    if (foundUser) {
        throw createCustomError("User already exists", 400);
    }

    // hash the password
    const hashedPassword = await hashingOperations.hashPassword(password);

    // create verification token
    const emailVerificationToken = tokenOperations.generateToken({
        email,
    });

    // create a new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        emailVerificationToken
    });

    // save the user to the database
    await newUser.save();

    // send verification email
    const subject = "Email Verification";
    const text = `Click on the following button to verify your email:`;
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - FIRM-CREATIVES</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            background-color: #e9ecef;
            font-family: 'Arial', sans-serif;
        }
        .container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
        }
        h1 {
            color: #333;
            font-size: 24px;
            font-weight: bold;
        }
        p.lead {
            color: #666;
            font-size: 16px;
            margin-top: 10px;
        }
        .btn-success {
            background-color: #28a745;
            border-color: #28a745;
            font-size: 16px;
            padding: 10px 20px;
        }
        .btn-success:hover {
            background-color: #218838;
            border-color: #1e7e34;
        }
        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container text-center">
        <h1 class="mt-5">Email Verification - FIRM-CREATIVES</h1>
        <p class="lead">Thank you for signing up! Please click the button below to verify your email address.</p>
        <button class="btn btn-success mt-3">
        <a href="${req.protocol}://${req.get('host')}/api/v1/auth/verify/${emailVerificationToken}" style="color: white; text-decoration:none;">Verify Email</a>
        </button>
        <div class="footer mt-5">
            <p>If you did not sign up for this account, please ignore this email.</p>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>`;


    await sendEmail(email, subject, text, html);
};

export const loginUser = async (userData) => {
    // destructuring the userData object
    const { email, password } = userData;

    // check if the email exists
    const foundUser = await User.findOne({
        email,
    });

    if (!foundUser) {
        throw createCustomError("User does not exist", 400);
    }

    // check if the password is correct
    const isPasswordCorrect = await hashingOperations.comparePassword(
        password,
        foundUser.password
    );

    if (!isPasswordCorrect) {
        throw createCustomError("Invalid credentials", 400);
    }

    // check if the email is verified
    if (!foundUser.emailVerified) {
        throw createCustomError("Email not verified", 400);
    }

    // generate a token
    const token = tokenOperations.generateToken({
        id: foundUser._id,
        email: foundUser.email,
    });

    return token;
};

export const verifyEmail = async (token) => {

    // verify the token
    const decoded = tokenOperations.verifyAccessToken(token);

    // find the user by email
    const foundUser = await User.findOne({
        email: decoded.email,
    });

    if (!foundUser) {
        throw createCustomError("User not found", 400);
    }

    // update the emailVerified field
    foundUser.emailVerified = true;

    // save the user to the database
    await foundUser.save();
}