const Discord = require('discord.js');

exports.run = async (bot, message, args) => {            
    
  if(!message.member.hasPermission("KICK_MEMBERS")){
    const yetkiyok = new Discord.MessageEmbed()
    .setAuthor('Atılma!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Üyeleri At** yetkisine sahip olmalısın!`)
    .setColor('#04F9EC')
    .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(yetkiyok)
}
  
    let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(new Discord.MessageEmbed()
.setAuthor('Atılma!', message.author.displayAvatarURL())
.setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!kick ${message.author} deneme`)
.setColor('#04F9EC')
.setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  if (user.id === message.author.id) return message.channel.send(new Discord.MessageEmbed()
.setAuthor('Atılma!', message.author.displayAvatarURL())
.setDescription(`İşlem başarısız! \n \n Maalesef kendini atamazsın.`)
.setColor('#04F9EC')
.setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
if (user.position > message.member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
  .setAuthor('Atılma!', message.author.displayAvatarURL())
  .setDescription(`İşlem başarısız! \n \n Senden daha yüksek veya aynı \n rolde olduğun yetkiliyi atamazsın.`)
  .setColor('#04F9EC')
  .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
                if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Kullanıcı Sunucuda yok aq`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Kullanıcı Sunucuda yok aq`)



   if (!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed()
  .setAuthor('Atılma!', message.author.displayAvatarURL())
  .setDescription(`İşlem başarısız! \n \n Senden daha yüksek veya aynı \n rolde olduğun kullanıcıyı atamazsın.`)
  .setColor('#04F9EC')
  .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
    message.guild.member(user).kick(reason);
    const kick =  new Discord.MessageEmbed()
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    .setDescription(`**Yetkili**: ${message.author} \n **Atılan**: <@${user.id}> \n **Sebep**: ${reason}`)
    .setAuthor('Atılma!', message.author.displayAvatarURL())
    .setColor('#04F9EC');
    message.channel.send(kick)




};


exports.conf = {
  aliases: ['at','Kick','kiCk', 'KiCk', 'KicK', 'KiCK'],
  permLevel: 0,
};


exports.help = {
  name: 'kick',
  description: 'Belirttiğiniz kişiyi sunucudan atar.',
  usage: 'kick <@kullanıcı> <sebep>',
 
};