import { config } from "dotenv";

config({ path: `.env.local` });

export const { PORT, MONGO, JWT_SECRET } = process.env;
