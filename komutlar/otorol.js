const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let rol = message.mentions.roles.first()
    
    if(!message.member.hasPermission("ADMINISTRATOR")){ 
      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor('Otorol!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
      .setColor('#04F9EC')
      .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(yetkiyok)
  }
    
    if(!rol) return message.channel.send(new Discord.MessageEmbed()
    .setAuthor('Otorol!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!otorol <@Rol>`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));

    db.set(`otorol_${message.guild.id}`,rol.id)
  
    message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Otorol!', message.author.displayAvatarURL())
            .setDescription(`${rol} **oto-rol** olarak ayarlandı.`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorol-ayarla'],
    permLevel: 0
  };

exports.help = {
    name: 'otorol',
    description: 'asdasdasd',
    usage: 'g!otorol #rol'
  };