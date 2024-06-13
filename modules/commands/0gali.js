module.exports.config = {
	name: "gali",
	version: "1.1.1",
	hasPermssion: 2,
	credits: "DODOinfx",
	description: "MUJI",
	commandCategory: "ai",
	usages: "[text/message/chat]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("MACHIKNEYY JATHO MUJI TERO AAMA LAI CHIKNA AAUNXU ROK TEL LAGAYERA THOKXU MUJI RANDI KO AAULAD DODO KO NAME YAAD GARI RAKH TERO EX BAU HO MA MUJI MACHIKNEYY VALU KO NASOO. YAAD RAKHI RAKH TERO BAU DODO LAI NATRA GANG LYAERA JHATI LAGERA CHIKXU MUJI TALAI...... ", event.threadID, event.messageID)
	else api.sendMessage(`${say} OE MACHIKNEYY JATHO MUJI TERO AAMA LAI CHIKNA AAUNXU ROK TEL LAGAYERA THOKXU MUJI RANDI KO AAULAD DODO KO NAME YAAD GARI RAKH TERO EX BAU HO MA MUJI MACHIKNEYY VALU KO NASOO. YAAD RAKHI RAKH TERO BAU DODO LAI NATRA GANG LYAERA JHATI LAGERA CHIKXU MUJI TALAI......`, event.threadID, event.messageID);
}
