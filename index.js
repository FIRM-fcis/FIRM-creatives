import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a new express application
const app = express();

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Start the Express server
try {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
  });
} catch (error) {
  console.error("Error starting server: ", error);
}
