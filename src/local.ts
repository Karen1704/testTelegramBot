import { bot } from './bot.ts' //TS2307: Cannot find module ./bot.ts or its corresponding type declarations.

async function main() {
    console.log('Bot is running locally with polling...')
    await bot.start()
}

main().catch(console.error)