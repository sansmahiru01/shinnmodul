import fetch from 'node-fetch'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`

let f = await api.tiktok(text)
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
 let cap = `*DOWNLOADER TIKTOK*
 

*Nickname :* ${f.nickname}
*Duration :* ${f.duration}
*Description :* ${f.description}`
conn.sendFile(m.chat, f.wmplay, 'ttmp4', cap, m)
}
handler.help = ['tiktokwm', 'ttwm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokwm|ttwm)$/i
handler.limit = true
export default handler