const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")){
    const yetkiyok = new Discord.MessageEmbed()
    .setAuthor('Kayıt!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
    .setColor('#04F9EC')
    .setFooter('Görünteleyen: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(yetkiyok)
}

let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
let rol = message.mentions.roles.first();   
  
if(!kullanici) return message.reply(new Discord.MessageEmbed()
  .setAuthor('Kayıt!', message.author.displayAvatarURL())
  .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n ${ayarlar.prefix}kayıt ${message.author} <isim>`)
  .setColor('#04F9EC')
  .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  
if(!isim) return message.reply(new Discord.MessageEmbed()
    .setAuthor('Kayıt!', message.author.displayAvatarURL())
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n ${ayarlar.prefix}kayıt ${message.author} <isim>`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
  
if(isim.length > 32) return message.reply(`Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz.`)
  
  
          let kayıtrol = db.fetch(`kayıtrol_${message.guild.id}`)

        if(!kayıtrol) {
            const fame = new Discord.MessageEmbed()
            .setAuthor('Kayıt!', message.author.displayAvatarURL())
            .setColor("#04F9EC")
            .setDescription(`İşlem başarısız! \n Kayıt rolü belirtilmemiş, belirtmek için ${ayarlar.prefix}kayıt-rol <@rol>`)
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())

            return message.channel.send(fame)
        }
  
message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
message.channel.send(new Discord.MessageEmbed()
  .setAuthor('Kayıt!', message.author.displayAvatarURL())
  .setDescription(`${kullanici} yetkili ${message.author} tarafından kayıt edildi. \n Aramıza hoşgeldin **${isim}** \n \n Senle birlikte artık **3** kişiyiz!`)
  .setColor('#04F9EC')
  .setFooter('Kayıt Eden: ' + message.author.tag, message.author.displayAvatarURL()));
  message.guild.member(kullanici).roles.add(kayıtrol)
  //message.member.roles.add(kayıtrol)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-et'],
    permLevel: 0
}

exports.help = {
    name: 'kayıt',
    description: 'Belirttiğiniz kullanıcıyı kayıt eder.',
    usage: 'kayıt @kullanıcı <isim>'
}