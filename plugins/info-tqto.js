import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
*T H A N K S - TO*
- Zyko - Md (Developer)
- Aldi Lesmana (Mastah)
- WH-MODS-DEV (Mastah)
- XTRAM-TEAM (Mastah)
- Axell (Perecode)
- La Divaa (Penyemangat Axell)

*Project BOT* : 21 December 2022
_this bot was redeveloped by axel who recoded some of the features and menus of the bot_

*Owner Contact* :
wa.me/6288289338073`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command =  /^(tqto|thanksto|thanks to)$/i

export default handler
