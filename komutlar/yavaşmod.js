const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setAuthor('Yavaş Mod!', message.author.displayAvatarURL())
                .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!slowmode [0/10]`)
                .setColor("#04F9EC")
                .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send({embed})
            return
          }
if (limit > 10) {
    return message.channel.send(new Discord.MessageEmbed()
      .setAuthor('Yavaş Mod!', message.author.displayAvatarURL())
      .setDescription("İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!slowmode [0/10]")
      .setColor("#04F9EC"));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlandı.`).setColor("#04F9EC"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod (1/10)',
};
