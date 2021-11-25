const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
      
    if(!message.member.hasPermission("ADMINISTRATOR")){ 
      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor('Selamün Aleyküm - Aleyküm Selam!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Yönetici** yetkisine sahip olmalısın!`)
      .setColor('#04F9EC')
      .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(yetkiyok)
  }
      
        if (!args[0]) {
    const sa = new Discord.MessageEmbed()
          .setAuthor('Selamün Aleyküm - Aleyküm Selam!', message.author.displayAvatarURL())
          .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!sa-as [aç/kapat]`)
          .setColor('#04F9EC')
          .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(sa)
  }
      
        // Aç
        if(args[0] === "aç"){
            db.set(`cmfsaas_${message.guild.id}`, 'aktif')

            // Mesaj
            const codemarefi = new Discord.MessageEmbed()
            .setAuthor('Selamün Aleyküm - Aleyküm Selam!', message.author.displayAvatarURL())
            .setDescription(`Selamün aleyküm, aleyküm selam \n sistemi açıldı.`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL());
            message.channel.send(codemarefi)
        }
        
        // Kapat
        if(args[0] === "kapat"){
            db.delete(`cmfsaas_${message.guild.id}`)

            // Mesaj
            const codemarefi = new Discord.MessageEmbed()
            .setAuthor('Selamün Aleyküm - Aleyküm Selam!', message.author.displayAvatarURL())
            .setDescription(`Selamün aleyküm, aleyküm selam \n sistemi kapatıldı.`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL());
            message.channel.send(codemarefi)
        }
    } // CODEMAREFİ - MAREFİ 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Sa-As','Sa-as','SA-AS','sa-As','sa-AS'],
    permLevel: 0
}

exports.help = {
    name: 'sa-as'
}