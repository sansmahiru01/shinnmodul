import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
*- click the link below -*
_https://youtu.be/gtvRVFozmOs_


Axell 
Owner Contact : 
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
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
