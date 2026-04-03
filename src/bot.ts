import { Bot } from 'grammy'
import { env } from './utils/env.js'
import { startCommand } from './commands/start.js'

export const bot = new Bot(env.BOT_TOKEN)

bot.command('start', startCommand)

bot.command('help', async (ctx) => {
    await ctx.reply(
        `Available commands:\n` +
        `/start - start bot\n` +
        `/help - show help`
    )
})

bot.callbackQuery('about', async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply('This bot is built with Node.js, TypeScript, grammY, and Vercel.')
})

bot.callbackQuery('help', async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply('Use /start to open the main menu.')
})

bot.callbackQuery('profile', async (ctx) => {
    await ctx.answerCallbackQuery()
    const user = ctx.from

    await ctx.reply(
        `👤 Profile\n\n` +
        `ID: ${user.id}\n` +
        `Name: ${user.first_name}\n` +
        `Username: @${user.username || 'no_username'}`
    )
})

bot.on('message:text', async (ctx) => {
    const text = ctx.message.text

    if (text.startsWith('/')) return

    await ctx.reply(`You said: ${text}`)
})