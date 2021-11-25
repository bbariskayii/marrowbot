const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")){
    const yetkiyok = new Discord.MessageEmbed()
    .setAuthor('İsim Değiştirme!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
    .setColor('#04F9EC')
    .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(yetkiyok)
}

let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
  
if(!kullanici) return message.reply(new Discord.MessageEmbed()
  .setAuthor('İsim Değiştirme!', message.author.displayAvatarURL())
  .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!isim-değiştir ${message.author} acaba isim ne olsa?`)
  .setColor('#04F9EC')
  .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  
if(!isim) return message.reply(new Discord.MessageEmbed()
    .setAuthor('İsim Değiştirme!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!isim-değiştir ${message.author} acaba isim ne olsa?`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  
if(isim.length > 32) return message.reply(`Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz.`)
  
message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
message.channel.send(new Discord.MessageEmbed()
  .setAuthor('İsim Değiştirme!', message.author.displayAvatarURL())
  .setDescription(`@${isim} kullanıcısının ismi değiştirildi. \n \n Eski isim: **${kullanici.username}** \n Yeni isim: **${isim}**`)
  .setColor('#04F9EC')
  .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir', 'nick', 'nick-değiştir', 'nick-degistir', 'isim-degistir', 'nickdegistir', 'nickdeğiştir'],
    permLevel: 0
}

exports.help = {
    name: 'isim-değiştir',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>'
}