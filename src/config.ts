import dotenv from "dotenv";
dotenv.config();

export const {
  PORT,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  BCRYPT_PASS,
  SALT_ROUNDS,
  TOKEN,
} = process.env;
