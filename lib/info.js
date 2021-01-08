exports.info = (id, UTMs, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa) => {
	return `*MENU ${UTMs}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${UTMs}*
╠════════════════════
║├≽️⚜ *AUTOR* : _DENI_
║├≽️⚜ *DESIGNER* : _DENI_
║├≽️⚜ *OWNER* : _YA DENI :v_
╠════════════════════
║  *${UTMs}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *Instagram <Follow>*
║│ _${instagram}_
║│3. *Creator ${UTMs}*
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
