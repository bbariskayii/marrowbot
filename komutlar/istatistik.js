const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
const progressbar = require('../modules/progressbar/index.js');
const ramyuzde = (process.memoryUsage().heapUsed / 1024 / 512).toFixed(2);
const bar = progressbar.splitBar(100, ramyuzde,25,"▬","<:turkbayragi:908659389639049236>");

/*CPU*/
const gauge = require('cpu-gauge');
var cpu = gauge.start();

require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setAuthor('Marrow bot bilgileri', message.author.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/avatars/905532869743636500/59b79370e370c45d200590d6edb90db9.png?size=80")
    .setColor('#04F9EC')
    .setFooter('Görüntüleyen: ' + message.author.tag, message.author.displayAvatarURL())
.addFields(
        { name: 'Piyasaya Sunuş Tarihi:', value: '01.01.2022 - 03:59:20', inline:true },
        { name: 'Ram Kullanım [%'+ramyuzde+']', value: (process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB", inline: true },
  		  { name: '\u200b', value: '\u200b', inline: true },
    )
.addFields(
        { name: 'Uptime:', value: seksizaman, inline: true},
        { name: 'CPU', value: "%"+parseInt(cpu.usage().percent), inline: true},
  		  { name: '\u200b', value: '\u200b', inline: true }
    )
.addFields(
        { name: 'Bot Sâhibi:', value: "[HzGeanus#5250](https://www.discord.com/users/736168523050516601)", inline:true },
        { name: 'Kütüphane:', value: "JS, NodeJs", inline:true },
    		{ name: '\u200b', value: '\u200b', inline: true }
    )
.addFields(
        { name: 'Sunucu Sayısı:', value: "1", inline:true },
        { name: 'Gecikme:', value: client.ws.ping + "ms", inline:true },
    		{ name: '\u200b', value: '\u200b', inline: true }
    )
    .addField("Ram Bar Göstergesi:", bar)
    .addField("Marrow'un Hizmet Ettiği Kullanıcılar [None]", "<:cevrimici:908771274363404319> Number <:bosta:908771274392748044> Number <:mesgul:908771274292084746> Number <:cevrimdisi:908771274300473344> Number")
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","stats","info","bot"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};