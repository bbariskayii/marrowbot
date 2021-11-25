const Discord = require('discord.js')
const db = require('quick.db')
 
exports.run = async(client, message, args) => {
  
    if(!message.member.hasPermission("ADMINISTRATOR")){ 
      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor('Link Engel!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
      .setColor('#04F9EC')
      .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(yetkiyok)
  }
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
          .setAuthor('Link Engel!', message.author.displayAvatarURL())
          .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!link-engel [aç/kapat]`)
          .setColor('#04F9EC')
          .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(sa)
  }
  if (args[0] === 'aç' || args[0] === 'ac') {
    
    db.delete(`reklam_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
          .setAuthor('Link Engel!', message.author.displayAvatarURL())
          .setDescription(`Link Engel açıldı artık kanallarda link paylaşılabilir.`)
          .setColor('#04F9EC')
          .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.set(`reklam_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
          .setAuthor('Link Engel!', message.author.displayAvatarURL())
          .setDescription(`Link Engel kapatıldı artık kanallarda link paylaşılamaz.`)
          .setColor('#04F9EC')
          .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: ['linkengel'],
  permLevel: 0
};
exports.help = {
  name: 'link-engel'
}; 