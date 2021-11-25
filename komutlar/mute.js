const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')

    exports.run = async(client, message, args) => {
    if (message.channel.type !== 'dm') {

    if(!message.member.hasPermission("MUTE_MEMBERS")){
            const yetkiyok = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n Bu komutu kullanabilmek için \n **Üyeleri Sustur** yetkisine sahip olmalısın!`)
            .setColor('#04F9EC')
            .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();
        let rol = message.mentions.roles.first();   
        let sure = args[1];
        let sebep = args.slice(2).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!mute ${message.author} 10m deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(cmfhata)
        }

        if(!sure){
            const cmfhata = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!mute ${message.author} 10m deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!mute ${message.author} 10m deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(cmfhata)
        }

        let muterol = db.fetch(`muterol_${message.guild.id}`)

        if(!muterol) {
            const fame = new Discord.MessageEmbed()
            .setAuthor('Susturma!', message.author.displayAvatarURL())
            .setColor("#04F9EC")
            .setDescription(`İşlem başarısız! \n Ceza rolü belirtilmemiş, belirtmek için m!cezarol <@rol>`)
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())

            return message.channel.send(fame)
        }
        
        if(kullanıcı && sure && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('#04F9EC')
            .setDescription(`**Yetkili**: ${message.author} \n **Susturulan**: ${kullanıcı} \n **Sebep**: ${sebep} \n **Süre**: ${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}`)
            .setAuthor(`Susturma!`, message.author.avatarURL({dynamic: true}))
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send(cmfmute)





            kullanıcı.roles.add(muterol)

      

            setTimeout(() => {
                kullanıcı.roles.remove(muterol)

                const mutebitti = new Discord.MessageEmbed()
                .setColor('#00ff00')
                message.channel.send(mutebitti)
            }, ms(sure))

        }
}
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Mute','MUTE','sustur','Sustur','SUSTUR'],
    permLevel: 0
}

exports.help = {
    name: 'mute'
}