const Discord = require('discord.js')

    exports.run = (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")){
            const yetkiyok = new Discord.MessageEmbed()
            .setAuthor('Yasaklama!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Üyeleri Engelle** yetkisine sahip olmalısın!`)
            .setColor('#04F9EC')
            .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(yetkiyok)
        }

        let kullanici = message.mentions.members.first();
        let sebep = args.slice(1).join(' ');
        
        if(!kullanici){
            const kullanicihata = new Discord.MessageEmbed()
            .setAuthor('Yasaklama!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!ban ${message.author} deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(kullanicihata)
        }
        if(!sebep){
            const sebephata = new Discord.MessageEmbed()
            .setAuthor('Yasaklama!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!ban ${message.author} deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(sebephata)
        }
      
      let mentionMember = message.mentions.members.first();
if (message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
  .setAuthor('Yasaklama!', message.author.displayAvatarURL())
  .setDescription(`İşlem başarısız! \n \n Senden daha yüksek veya aynı \n rolde olduğun kişiyi yasaklayamazsın.`)
  .setColor('#04F9EC')
  .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
      
        if(kullanici && sebep){
            kullanici.ban({reason: sebep})

            const ban =  new Discord.MessageEmbed()
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            .setDescription(`**Yetkili**: ${message.author} \n **Yasaklanan**: ${kullanici} \n **Sebep**: ${sebep}`)
            .setAuthor(`Yasaklama!`, message.author.avatarURL({dynamic: true}))
            .setColor('#04F9EC');
            message.channel.send(ban)
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Ban','yasakla','Yasakla','banned'],
    permLevel: 0
}

exports.help = {
    name: 'ban'
}