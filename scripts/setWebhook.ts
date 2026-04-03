import { bot } from "../src/bot.js";
import { env } from "../src/utils/env.js";

async function setWebhook() {
    const url = `${process.env.WEBHOOK_URL ? `${process.env.WEBHOOK_URL}` : "http://localhost:3000"}/api/webhook`;
    try {
        const result = await bot.api.setWebhook(url, {
            secret_token: env.WEBHOOK_SECRET
        });
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

setWebhook();