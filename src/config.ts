export const config = {
  BACKEND_API_BASE_URL: process.env.REACT_APP_BACKEND_API_BASE_URL || "http://localhost:8080",
  AGGREGATE_CACHE_TTL_MS: Number(process.env.REACT_APP_AGGREGATE_CACHE_TTL_MS) || 5 * 60 * 1000, // in ms, default to 5 mins
};