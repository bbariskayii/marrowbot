const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = async(client, message, args) => {
    
		if(!message.member.hasPermission("MUTE_MEMBERS")){
            const yetkiyok = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Üyeleri Sustur** yetkisine sahip olmalısın!`)
            .setColor('#04F9EC')
            .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(yetkiyok)
        }
      
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!unmute ${message.author} deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(cmfhata)
        }
      
        if(kullanıcı){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('#04F9EC')
            .setDescription(`**Yetkili**: ${message.author} \n **Susturulması Kaldırılan**: ${kullanıcı}`)
            .setAuthor(`Susturma!`, message.author.avatarURL({dynamic: true}))
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send(cmfmute)

          let muterol = db.fetch(`muterol_${message.guild.id}`)
          
            kullanıcı.roles.remove(muterol)
        }

    } // CodeMareFi - #MareFi && #CMF

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['UnMute','UNMUTE','susturmakaldır','Susturmakaldır','SUSTURMAKALDIR'],
    permLevel: 0
}

exports.help = {
    name: 'unmute'
}