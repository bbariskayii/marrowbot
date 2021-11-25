const Discord = require('discord.js');

exports.run = function(client, message, args) {
 
  if(!message.member.hasPermission("MANAGE_MESSAGES")){ 
    const yetkiyok = new Discord.MessageEmbed()
    .setAuthor('Temizle!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Mesajları Yönet** yetkisine sahip olmalısın!`)
    .setColor('#04F9EC')
    .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(yetkiyok)
}
  
if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setAuthor('Temizle!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!sil [0/100]`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
return message.channel.send(errembed);
}
 
if (args[0] < 1) return message.reply(new Discord.MessageEmbed()
    .setAuthor('Temizle!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!sil [0/100]`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
if (args[0] > 100) return message.reply(new Discord.MessageEmbed()
    .setAuthor('Temizle!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!sil [0/100]`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
 
message.channel.bulkDelete(args[0])
return message.channel.send(new Discord.MessageEmbed()
.setAuthor('Temizle!', message.author.displayAvatarURL())
.setColor('#04F9EC')
.setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
.setDescription(''+`**${args[0]}**`+' adet mesaj başarıyla silindi.')).then(m => m.delete({timeout: 3900}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil", "mesaj-sil", "mesajları-sil"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sil',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '.sil <miktar>'
};