import express from "express";
import dotenv from "dotenv";
import ExpressMongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./src/DB/config.js";
import userRouter from "./src/routes/user.js";
import authRouter from "./src/routes/auth.js";
import projectRouter from "./src/routes/project.js";
import errorHandler from "./src/middlewares/errors/errorHandler.js";
import notFoundHandler from "./src/middlewares/errors/notFoundHandler.js";

// Load environment variables from .env file
dotenv.config();

// Create a new express application
const app = express();

// Enable CORS for all requests (for now)
app.use(cors());

// The request handler must be the first middleware on the app
app.use(express.json());

// Set security HTTP headers
app.use(helmet());

// Data sanitization against NoSQL query injection
app.use(ExpressMongoSanitize());

// Data sanitization against XSS
app.use(xss());

const baseUrl = process.env.BASE_URL;
// Define a route handler for the default home page
app.use(`${baseUrl}/auth`, authRouter);
app.use(`${baseUrl}/users`, userRouter);
app.use(`${baseUrl}/projects`, projectRouter);

app.use(errorHandler);
app.use(notFoundHandler);

// Start the Express server
try {
  app.listen(process.env.PORT, async () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
  });
  await connectDB();
} catch (error) {
  console.error("Error starting server: ", error);
}
