import 'dotenv/config'

const BOT_TOKEN = process.env.BOT_TOKEN!
const WEBHOOK_URL = process.env.WEBHOOK_URL!
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET!

async function main() {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            url: WEBHOOK_URL,
            secret_token: WEBHOOK_SECRET,
            allowed_updates: ['message'],
            drop_pending_updates: true
        }),
    })

    const data = await res.json()
    console.log(data)
}

main().catch(console.error)