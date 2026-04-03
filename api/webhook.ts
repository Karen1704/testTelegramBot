import { webhookCallback } from 'grammy'
import { bot } from '../src/bot.js'
import { env } from '../src/utils/env.js'

const handler = webhookCallback(bot, 'std/http')

export default async function (req: Request): Promise<Response> {
    if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 })

    const secret = req.headers.get('x-telegram-bot-api-secret-token')
    if (secret !== env.WEBHOOK_SECRET) return new Response('Unauthorized', { status: 401 })

    try {
        await handler(req)
        return new Response('ok')
    } catch (err) {
        console.error('Telegram webhook error:', err)
        return new Response('Internal Server Error', { status: 500 })
    }
}