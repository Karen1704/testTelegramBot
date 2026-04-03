import {bot} from "./bot.js";

async function main() {
    console.log("Bot is running locally with polling...");
    await bot.start();
}

main().catch(console.error);