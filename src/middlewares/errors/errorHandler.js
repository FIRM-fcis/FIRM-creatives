import { CustomError } from "./customError.js";

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      message: error.message,
      body: error.body,
      status: error.statusCode,
    });
  }
  console.log(error);
  return res
    .status(500)
    .json({ msg: "Internal server error!", status: 500, body: null });
};

export default errorHandler;
