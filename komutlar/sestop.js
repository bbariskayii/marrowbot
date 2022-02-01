const Discord = require("discord.js");
exports.run = async (client, message, args) => {
const embed1 = new Discord.MessageEmbed()
.setAuthor('${message.author} kişinin ses ve yazı aktifliği!', message.author.displayAvatarURL())
.setDescription(`Bu komut sayesinde k! \n **Zaman:** 10/01/2022 \n \n **Oyun Açıklaması:** Alanda mayınlara rastlamadan tüm boş kareleri bulmaktır. Karelere tıklayınca çıkan sayılar ise karenin etrafındaki mayın sayısının toplamını gösterir.`)
.setColor("")
.setFooter('Görüntüleyen: ' + message.author.tag, message.author.displayAvatarURL())
message.channel.send(embed1)
}
exports.conf = {
  aliases: ["mayıntarlası", "mayın-tarlası", "mayin", "mayintarlasi"],
  permLevel: 0
};

exports.help = {
  name: "voice"
};