exports.donate = (id, XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${XBOT}*
╠════════════════════
║├≽️⚜ *PULSA* : _0821-4432-3683_
║├≽️⚜ *DANA* : _082144323683_
╠════════════════════
║  *${XBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *Instagram <Follow>*
║│ _${instagram}_
║│3. *Creator ${XBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY DENI*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}

