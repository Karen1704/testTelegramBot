import type { Context } from 'grammy'
import { mainKeyboard } from '../keyboards/main.js'

export async function startCommand(ctx: Context) {
    const firstName = ctx.from?.first_name || 'friend'

    await ctx.reply(
        `Hello, ${firstName} 👋\n\nWelcome to your Telegram bot .`,
        {
            reply_markup: mainKeyboard(),
        }
    )
}