import 'dotenv/config'

function requireEnv(name: string): string {
    const value = process.env[name]
    if (!value) {
        throw new Error(`Missing env variable: ${name}`)
    }
    return value
}

export const env = {
    BOT_TOKEN: requireEnv('BOT_TOKEN'),
    WEBHOOK_SECRET: requireEnv('WEBHOOK_SECRET'),
    WEBHOOK_URL: requireEnv('WEBHOOK_URL'),
}