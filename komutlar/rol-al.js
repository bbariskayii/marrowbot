const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor('Rol!', message.author.displayAvatarURL())
        .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!rol-al <@Üye> <@Rol>`)
        .setColor('#04F9EC')
        .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  if(!user.roles.cache.get(rol.id)) return message.channel.send(new Discord.MessageEmbed()
          .setAuthor('Rol!', message.author.displayAvatarURL())
          .setDescription(`İşlem başarısız! \n \n Zaten kullanıcı bu rolde değil.`)
          .setColor('#04F9EC')
          .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  if (rol.length < 1) return message.reply('**Rol idsini belirtmedin**');
user.roles.remove(rol)
const embed = new Discord.MessageEmbed()
        .setAuthor('Rol!', message.author.displayAvatarURL())
        .setDescription(`${user} kullanıcısının ${rol} rolü alındı.`)
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
  name: 'rol-al',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-al [kullanıcı] [@rol]'
};