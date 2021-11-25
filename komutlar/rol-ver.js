const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor('Rol!', message.author.displayAvatarURL())
        .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!rol-ver <@Üye> <@Rol>`)
        .setColor('#04F9EC')
        .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  if(user.roles.cache.get(rol.id)) return message.channel.send(new Discord.MessageEmbed()
          .setAuthor('Rol!', message.author.displayAvatarURL())
          .setDescription(`İşlem başarısız! \n \n Zaten kullanıcı bu rolde.`)
          .setColor('#04F9EC')
          .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
if (!rol) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor('Rol!', message.author.displayAvatarURL())
        .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!rol-ver <@Üye> <@Rol>`)
        .setColor('#04F9EC')
        .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
user.roles.add(rol)
const embed = new Discord.MessageEmbed()
        .setAuthor('Rol!', message.author.displayAvatarURL())
        .setDescription(`${user} kullanıcısına ${rol} rolü verildi.`)
        .setColor('#04F9EC')
        .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};