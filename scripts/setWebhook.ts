import { Bot } from 'grammy'
import { env } from '../src/utils/env.js'

const bot = new Bot(env.BOT_TOKEN)

async function main() {
    try {
        await bot.api.setWebhook(env.WEBHOOK_URL, {
            secret_token: env.WEBHOOK_SECRET,          // must match your env
            allowed_updates: ['message', 'callback_query'] // include all types you use
        })
        console.log('Webhook set successfully!')
    } catch (err) {
        console.error('Failed to set webhook:', err)
    }
}

main()