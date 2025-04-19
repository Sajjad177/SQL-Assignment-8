import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_REFRESH: process.env.JWT_REFRESH_KEY,
  JWT_REFRESH_IN: process.env.JWT_REFRESH_IN,
  nodeEnv: process.env.NODE_ENV,
};
