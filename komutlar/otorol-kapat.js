const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
    if(!message.member.hasPermission("ADMINISTRATOR")){ 
      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor('Otorol!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
      .setColor('#04F9EC')
      .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(yetkiyok)
  }
  
  
 const rol = db.fetch(`otorol_${message.guild.id}`)  


    db.delete(`otorol_${message.guild.id}`)
  
    message.channel.send(
      new Discord.MessageEmbed()
    .setAuthor('Otorol!', message.author.displayAvatarURL())
    .setDescription(`Otorol kapatıldı, artık girişde hiçbir rol verilmicek.`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorolsıfırla', 'otorolkapat', 'otorol-sıfırla'],
    permLevel: 0
  };

exports.help = {
    name: 'otorol-kapat',
    description: 'asdasdasd',
    usage: 'g!otorol-sıfırla'
  };