function validate(schema, isBody = true) {
  return async function (req, res, next) {
    try {
      let validatedResult;
      if (isBody)
        validatedResult = await schema.validateAsync(req.body, {
          abortEarly: false,
        });
      else {
        validatedResult = await schema.validateAsync(req.params, {
          abortEarly: false,
        });
      }
      next();
    } catch (error) {
      res.status(400).json({
        message: "Validation Error",
        body: error.details.map((detail) => ({
          message: detail.message,
          field: detail.path.join("."),
        })),
        status: 400,
      });
    }
  };
}

export default validate;