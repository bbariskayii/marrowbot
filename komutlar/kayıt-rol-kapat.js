const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
    if(!message.member.hasPermission("ADMINISTRATOR")){ 
      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor('Kayıt!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
      .setColor('#04F9EC')
      .setFooter('Görüntüleyen: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(yetkiyok)
  }
  
  
 const rol = db.fetch(`kayıtrol_${message.guild.id}`)  


    db.delete(`kayıtrol_${message.guild.id}`)
  
    message.channel.send(
      new Discord.MessageEmbed()
    .setAuthor('Kayıt!', message.author.displayAvatarURL())
    .setDescription(`Kayıt Rolü silindiği için artık kayıt edemezsiniz.`)
    .setColor('#04F9EC')
    .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-rol-kapat', 'kayıt-rol-sil', 'kayıt-rol-sıfırla'],
    permLevel: 0
  };

exports.help = {
    name: 'kayıt-rol-kapat',
    description: 'Belirlenen kayıt rolünü siler',
    usage: 'r!kayıt-rol-kapat'
  };