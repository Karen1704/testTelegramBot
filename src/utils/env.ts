import dotenv from "dotenv";
dotenv.config();

export const env = {
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    WEBHOOK_SECRET: process.env.WEBHOOK_SECRET || ""
};