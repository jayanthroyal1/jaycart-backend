export const requireAuth = (user) => {
  if (!user) {
    const error = new Error("Authentication required");
    error.code = "UNAUTHENTICATED";
    throw error;
  }
};
