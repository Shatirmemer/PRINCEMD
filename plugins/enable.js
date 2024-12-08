//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
   
	  
	  
	  case 'jarvis':
     case 'autotalk':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
           throw false
          }}
      chat.jarvis = isEnable
     break
	
	  
	  case 'pmblocker':
	case 'pbm':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pmblocker = isEnable
break	  

		  
		  case 'testbb':
	case 'testb':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.testbot = isEnable
break	  

		  case 'reacts': case 'reaction':
	case 'autoreaction': case 'reactions': case 'autoreactions':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoreacts = isEnable
break	  


case 'antipmspam':
	case 'pmspam':
		  case 'spampm':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pmspam = isEnable
break	  
		  

	  
 case 'autobio':
  isAll = true
  if (!isROwner) {
  global.dfail('rowner', m, conn)
  throw false
  }
  bot.autoBio = isEnable
  break	 
   
	  
	  
     case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
	  
     case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autosticker = isEnable
      break
      
	  
	  
      case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = isEnable
      break
   
	  
   case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
  
	  
    case 'antitoxic':
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break

		  
    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
 
	  
	  case 'autostatus':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.viewStory = isEnable
      break

		  
    case 'testf':
    case 'testfeature':
    case 'tst':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.testf = isEnable
      break
		  

		  case 'nocmds':
    case 'anticommands':
    case 'blockcmds':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.anticmds = isEnable
      break


		  
		  case 'antilink2': case 'antilinkall':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

		  
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break

		  
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break

		  
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break

		  
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break


		  
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break


		  
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antix':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break


		  
case 'antidiscord':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiDiscord = isEnable 
break


		  
case 'antithreads':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiThreads = isEnable 
break
		  

case 'antitwitch':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitch = isEnable 
break

		  case 'antiporn': case 'antinude':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiPorn = isEnable          
break
		  
      case 'antibotclone':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBotClone = isEnable
      break

		  
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

		  
    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break

		  
     case 'chatbot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.chatbot = isEnable
      break

    case 'princechat':
	case 'princegpt':	  
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.princechat = isEnable
      break

		  
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break

		  case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
		  
	  
	case 'autotype':
    case 'alwaysonline':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.autotype = isEnable
      break

		  
      case 'anticall':
        case 'nocall':
          isAll = true
          if (!isOwner) {
            global.dfail('owner', m, conn)
            throw false
          }
          bot.antiCall = isEnable
          break


		  
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'pconly':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      //global.opts['solopv'] = isEnable
      bot.pconly = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'gconly':
    case 'sologrupo':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      //global.opts['sologp'] = isEnable
      bot.gconly = isEnable
      break


		  
default:
     if (!/[01]/.test(command)) return m.reply(`
━━━━━━━━━━━━━【 *⚙️ BOT SETTINGS* ⚙️ 】━━━━━━━━━━━━━
                *✨ Toggle Features ✨*

╭━━━━━━━━━━━━━━【 *👑 OWNER CMD* 】━━━━━━━━━━━━━━╮

🔒 *\`${usedPrefix}public\`*  
   ➤ Switch bot between private and public mode

🚫 *\`${usedPrefix}pmblocker\`*  
   ➤ Block spam messages in inbox

💬 *\`${usedPrefix}autoreaction\`*  
   ➤ Enable auto-reactions to chats

🦠 *\`${usedPrefix}antipmspam\`*  
   ➤ Block spam and viruses in PMs

📩 *\`${usedPrefix}onlydm\`*  
   ➤ Limit bot to work only in DMs

👥 *\`${usedPrefix}onlyg\`*  
   ➤ Limit bot to work only in groups

⌨️ *\`${usedPrefix}autotype\`*  
   ➤ Show typing indicator in chats

🌐 *\`${usedPrefix}autobio\`*  
   ➤ Automatically update bot's bio

🚫 *\`${usedPrefix}antibotclone\`*  
   ➤ Remove cloned bots from groups

🔐 *\`${usedPrefix}restrict\`*  
   ➤ Restrict features like antilinkall

╭━━━━━━━━━━━━━━【 *⚡ ADMIN CMD* 】━━━━━━━━━━━━━━╮

🌟 *\`${usedPrefix}welcome\`*  
   ➤ Send welcome and goodbye messages

🖼️ *\`${usedPrefix}autosticker\`*  
   ➤ Automatically create stickers from images and videos

🔍 *\`${usedPrefix}detect\`*  
   ➤ Feature coming soon…

🎤 *\`${usedPrefix}jarvis\`*  
   ➤ Activate the voice chatbot

🛡️ *\`${usedPrefix}antispam\`*  
   ➤ Detect and block spammers

🚷 *\`${usedPrefix}nocmds\`*  
   ➤ Remove users who misuse commands

🌐 *\`${usedPrefix}antilinkall\`*  
   ➤ Detect and block all types of links

💢 *\`${usedPrefix}antitoxic\`*  
   ➤ Block toxic language

🎵 *\`${usedPrefix}antiTiktok\`*  
   ➤ Block Tiktok links

📹 *\`${usedPrefix}antiYoutube\`*  
   ➤ Block YouTube links

📱 *\`${usedPrefix}antiTelegram\`*  
   ➤ Block Telegram links

📘 *\`${usedPrefix}antiFacebook\`*  
   ➤ Block Facebook links

📸 *\`${usedPrefix}antiInstagram\`*  
   ➤ Block Instagram links

🐦 *\`${usedPrefix}antiTwitter\`*  
   ➤ Block Twitter links

🧵 *\`${usedPrefix}antiThreads\`*  
   ➤ Block Threads links

🎮 *\`${usedPrefix}antiDiscord\`*  
   ➤ Block Discord links

🎮 *\`${usedPrefix}antiTwitch\`*  
   ➤ Block Twitch links

🚫 *\`${usedPrefix}antinude\`*  
   ➤ Block adult content and explicit links

> ⚠️ *Bot automatically removes violators* ⚠️

╭━━━━━━━━━━━━━━【 *💬 USER CMD* 】━━━━━━━━━━━━━━╮

🗨️ *\`${usedPrefix}chatbot\`*  
   ➤ Start a conversation with the bot

🤖 *\`${usedPrefix}princechat\`* or *\`${usedPrefix}princegpt\`*  
   ➤ Chat with Princebot (ask anything!)

━━━━━━━━━━━━━━【 *EXAMPLES* 】━━━━━━━━━━━━━━

   To toggle features, use *\`${usedPrefix}on\`* or *\`${usedPrefix}off\`*:

   *\`${usedPrefix}on welcome\`*  
   *\`${usedPrefix}off welcome\`*
`)
      throw false

}		  

m.reply(`
✅ *${type.toUpperCase()}* *${isEnable ? `${mssg.nable}` : `${mssg.disable}`}* ${isAll ? `${mssg.toBot}` : isUser ? '' : `${mssg.toGp}`}
`.trim())  

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['config']
handler.command = /^((en|dis)able|(turn)?o(n|ff)|[01])$/i

export default handler
