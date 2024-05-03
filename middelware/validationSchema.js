export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const validationErrors = error.inner.map((err) => ({
      key: err.path,
      message: err.message,
    }));
    res
      .status(400)
      .json({ message: "Validation errors", errors: validationErrors });
  }
};
