// Dann Official
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply('Tunggu Sebentar...')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(manga), wm, 'manga.png', m)
}
handler.help = ['manga']
handler.tags = ['maker']
handler.command = /^(manga)$/i

handler.premium = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const manga = [
    "https://cdn.discordapp.com/attachments/770948564947304448/770950443089264650/00004-VNJ6qrF23KQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951666174132224/05.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951690300031006/06.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951703041671178/07.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951712537706516/08.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951727485681684/09.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951740929343539/10.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951753238577182/11.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951765427617842/12.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951777864253450/13.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770951793395105792/14.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952155804467230/zN0qPqwMf4s.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952158912577536/2bnd32F6b24.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952162317828096/3ZjHrJKqeGA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952165401165834/6bq3S331D-s.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952168688582666/A6VYGMYNGIs.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952180948533248/jZrtEMRayGU.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952183704715264/OlX_-IYmRVU.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952188021178390/qeLAfKEcuX0.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952189500719114/QKPD7SQP4es.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952192420479006/rrCP2IPpX0Y.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952195117416478/TTwnaD5s3AI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952197159649280/u7T8oqkMRAs.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952200600027136/Y1NOiVdb8E0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/676450710107455508/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/675468441330778194/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/675468425417719808/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/675468410838057020/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/670305815780917248/image0.png",
    "https://media.discordapp.net/attachments/527959259107950603/667506610809077773/image3.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667506610809077771/image2.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667506610310217729/image1.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667506610310217728/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667502729047965707/image3.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667502728485797889/image2.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667502728033075243/image1.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/667502728033075242/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/666770291736838174/image0.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/646576444306358293/image0.png",
    "https://media.discordapp.net/attachments/527959259107950603/552304850239619072/019.thumb.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/552045740621299717/ebluberry-510984-Persona_5_-_Tae_Takemi_1.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/551311902806900740/1551469614984.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771017128924807228/1759-eBIrfZS5ZHY.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374706984353792/00430-8kYf26o3PAQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374710566289438/00431-x4-6aZWb8d4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374739918028820/00437-7W5cuD94R8s.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374764173295666/00438-541HJ2qMjI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374861670940682/00420-KxOKYWh0BG4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374866518900796/00421-vBOD4X0a5ss.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374870810066965/00422-ZAl-znYOO0o.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374875494449152/00423-pLtfHabSh8Q.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374902518218772/00424-eFQtPC4yxYI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374923499175936/00425-UgxpF5O-SSs.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374932352303124/00426-zmmGnSPzAMw.jpg"
]