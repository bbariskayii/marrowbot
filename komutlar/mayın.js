const Discord = require("discord.js");
exports.run = async (client, message, args) => {
const embed1 = new Discord.MessageEmbed()
.setAuthor('Mayın Tarlası!', message.author.displayAvatarURL())
.setDescription(`Bu oyun modu çok yakında aktif olucaktır! \n **Zaman:** 10/01/2022 \n \n **Oyun Açıklaması:** Alanda mayınlara rastlamadan tüm boş kareleri bulmaktır. Karelere tıklayınca çıkan sayılar ise karenin etrafındaki mayın sayısının toplamını gösterir.`)
.setColor("")
.setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
message.channel.send(embed1)
}
exports.conf = {
  aliases: ["mayıntarlası", "mayın-tarlası", "mayin", "mayintarlasi"],
  permLevel: 0
};

exports.help = {
  name: "mayın"
};