import {InlineKeyboard} from 'grammy'

export function mainKeyboard() {
    return new InlineKeyboard()
        .text('📌 About', 'about')
        .text('🆘 Help', 'help')
        .row()
        .text('👤 Profile', 'profile')
}