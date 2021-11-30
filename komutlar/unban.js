const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args, member ) => {
 if (!message.member.hasPermission("BAN_MEMBERS")) 
{
    const prmlv = new Discord.MessageEmbed()
    .setAuthor('Yasaklama!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Üyeleri Engelle** yetkisine sahip olmalısın!`)
    .setColor('#04F9EC')
    .setFooter('Görüntüleyen: ' + message.author.tag, message.author.displayAvatarURL())
   return message.channel.send(prmlv)
  } 
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı ', '`unban`komutu özel mesajlarda kullanılamaz.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (!user) {
    const bid = new Discord.MessageEmbed()
    .setAuthor('Yasaklama!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!unban ${message.author.id} deneme`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
   return message.channel.send(bid).catch(console.error);
  } 
  if (reason.length < 1) {
    const reas = new Discord.MessageEmbed()
    .setAuthor('Yasaklama!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!unban ${message.author.id} deneme`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
   return message.channel.send(reas)
  } 

  
  message.guild.members.unban(user);
  const embed = new Discord.MessageEmbed()
    .setAuthor('Yasak Kaldırma!', message.author.displayAvatarURL())
    .setColor('#04F9EC')
    .setDescription(`**Yetkili**: ${message.author} \n **Yasağı Kaldırılan**: <@${user}> \n **Sebep**: ${reason}`)
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
   message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban-kaldır'],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};