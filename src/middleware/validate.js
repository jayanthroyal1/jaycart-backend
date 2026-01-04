export const validate = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const error = new Error("Validation Error");
    error.statusCode = 400;
    error.details = result.error.format();
    throw error;
  }
  return result.data;
};
