import { Bot } from "grammy";
import { env } from "./utils/env.js";
import { startCommand } from "./commands/start.js";

export const bot = new Bot(env.BOT_TOKEN);

bot.command("start", startCommand);

bot.command("help", async (ctx) => {
    await ctx.reply("Available commands:\n/start - start bot\n/help - show help");
});

bot.on("message:text", async (ctx) => {
    const text = ctx.message.text;
    if (text.startsWith("/")) return;
    await ctx.reply(`You said: ${text}`);
});