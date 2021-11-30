const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")){ 
      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor('Kayıt!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
      .setColor('#04F9EC')
      .setFooter('Görüntüleyen: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(yetkiyok)
  }

    let rol = message.mentions.roles.first();   
    if (!rol) return message.channel.send(new Discord.MessageEmbed()
    .setAuthor('Kayıt!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!kayıt-rol <@rol>`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
    
    db.set(`kayıtrol_${message.guild.id}`, rol.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor('Kayıt!', message.author.displayAvatarURL())
    .setColor("#04F9EC")
    .setDescription(`Kayıt rolü ${rol} olarak belirlendi!`)
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildd0nly: true,
    aliases: ["kayit-rol", "kayitrol", "kayıtrol"]
    };
    
    exports.help = {
    name: 'kayıt-rol',
    description: 'ping',
    usage: 'ping',
    };