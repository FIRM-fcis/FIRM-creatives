import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/DB/config.js";
import userRouter from "./src/routes/user.js";
import errorHandler from "./src/middlewares/errors/errorHandler.js";
import notFoundHandler from "./src/middlewares/errors/notFoundHandler.js";

// Load environment variables from .env file
dotenv.config();

// Create a new express application
const app = express();

app.use(express.json());

const baseUrl = process.env.BASE_URL;

// Define a route handler for the default home page
app.use(`${baseUrl}/users`, userRouter);

app.use(errorHandler);
app.use(notFoundHandler);

// Start the Express server
try {
  app.listen(process.env.PORT, async () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
    await connectDB();
  });
} catch (error) {
  console.error("Error starting server: ", error);
}
