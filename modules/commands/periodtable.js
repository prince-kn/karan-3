module.exports.config = {
	name: "periodictable",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "John Arida",//modified by NtrEms, don't change the credits!
	description: "Elements On The Periodic Table",
	commandCategory: "Science",
  usePrefix: true,
	usages: "[Element]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const john = args.join(" ");
if (!john)
return api.sendMessage(`Add An Element Lmao\nFor Full List Of The Elements, Type\n「 ${global.config.PREFIX}periodictable list 」`, event.threadID, event.messageID);
if (john == "list")
return api.sendMessage(`╔══ ≪ °❈° ≫ ══╗\nElements On The Periodic Table\n╚══ ≪ °❈° ≫ ══╝\n\n1. Actinium	- Ac	\n2. Aluminum	- Al\n3. Americium - Am\n4. Antimony - Sb	\n5. Argon - Ar\n6. Arsenic -	As	\n7. Astatine	 - At\n8. Barium - Ba	\n9. Berkelium	- Bk	\n10. Beryllium	- Be	\n11. Bismuth - 	Bi\n12. Bohrium -	Bh	\n13. Boron	- B\n14. Bromine	 - Br\n15. Cadmium -	Cd\n16. Calcium	 - Ca\n17. Californium -	Cf\n18. Carbon - 	C	\n19. Cerium - Ce\n20. Cesium -	 Cs	\n21. Chlorine - Cl\n22. Chromium -	 Cr\n23. Cobalt - Co\n24. Copper -	Cu\n25. Curium - Cm\n26. Darmstadtium	- Ds\n27. Dubnium	 - Db\n28. Dysprosium	 - Dy\n29. Einsteinium	- Es\n30. Erbium -	Er\n31. Europium - Eu\n32. Fermium -	Fm\n33. Fluorine -	F\n34. Francium - Fr\n35. Gadolinium - Gd\n36. Gallium	- Ga\n37. Germanium - 	Ge\n38. Gold	- Au	\n39. Hafnium	- Hf\n40. Hassium	- Hs\n41. Helium - He	\n42. Holmium	- Ho\n43. Hydrogen -	H\n44. Indium -	In	\n45. Iodine	- I\n46. Iridium -	Ir\n47. Iron	- Fe\n48. Krypton - Kr\n49. Lanthanum	- La	\n50. Lawrencium	- Lr\n51. Lead	- Pb	\n52. Lithium - Li	\n53. Lutetium -	Lu\n54. Magnesium -	Mg\n55. Manganese	 - Mn\n56. Meitnerium - 	Mt	\n57. Mendelevium -	Md\n58. Mercury - Hg\n59. Molybdenum	- Mo\n60. Neodymium -	Nd\n61. Neon	 - Ne\n62. Neptunium	 - Np\n63. Nickel -	Ni\n64. Niobium - 	Nb\n65. Nitrogen	- N\n66. Nobelium -	No\n67. Oganesson -	Og\n68. Osmium -	Os\n69. Oxygen -	O	\n70. Palladium - Pd	\n71. Phosphorus	 - P\n72. Platinum	- Pt\n73. Plutonium	 - Pu	\n74. Polonium -	Po	\n75. Potassium - 	K\n76. Praseodymium	- Pr\n77. Promethium -	 Pm\n78. Protactinium -	Pa\n79. Radium - Ra	\n80. Radon -	Rn	\n81. Rhenium -	Re	\n82. Rhodium -	Rh	\n83. Roentgenium - Rg	\n84. Rubidium -	Rb	\n85. Ruthenium -	Ru\n86. Rutherfordium -	Rf\n87. Samarium	 - Sm\n88. Scandium	 - Sc	\n89. Seaborgium	- Sg\n90. Selenium - Se	\n91. Silicon - Si\n92. Silver -	Ag	\n93. Sodium -	Na\n94. Strontium -	Sr\n95. Sulfur -	S\n96. Tantalum -	Ta\n97. Technetium -	Tc\n98. Tellurium -	Te\n99. Terbium -	Tb	\n100. Thallium	- Tl\n101. Thorium - Th\n102. Thulium	- Tm\n103. Tin	- Sn\n104. Titanium - Ti \n105. Tungsten -	W\n106. Ununbium -  Uub\n107. Ununhexium	- Uuh\n108. Ununpentium -	Uup\n109. Ununquadium - Uuq\n110. Ununseptium -	Uus\n111. Ununtrium - 	Uut	\n112. Uranium -	U\n113. Vanadium -	V\n114. Xenon -	Xe\n115. Ytterbium -	Yb\n116. Yttrium -	Y\n117. Zinc - Zn	\n118. Zirconium - Zr\n\n✎ Format:\n「 ${global.config.PREFIX}periodicaltable [Element Name or Symbol  」`, event.threadID, event.messageID);
axios.get(`https://api.popcat.xyz/periodic-table?element=${john}`).then(res => {
var name = res.data.name;
var symbol = res.data.symbol;
var atomicnum = res.data.atomic_number;
var atomicmass = res.data.atomic_mass;
var period = res.data.period;
var phase = res.data.phase;
var disco = res.data.discovered_by;
var summary = res.data.summary;
let callback = function () {
  api.sendMessage({
    body: `╔══ ≪ °❈° ≫ ══╗\nPeriodic Table Of ${name}\n╚══ ≪ °❈° ≫ ══╝\n\n» Name: ${name}\n» Symbol: ${symbol}\n» Atomic Number: ${atomicnum}\n» Atomic Mass: ${atomicmass}\n» Period: ${period}\n» Phase: ${phase}\n» Discovered By: ${disco}\n\n✎ Summary:\n「 ${summary} 」`,
    attachment: fs.createReadStream(__dirname + `/cache/elementp.png`)
  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/elementp.png`), event.messageID);
};
  request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/elementp.png`)).on("close", callback);
})
}