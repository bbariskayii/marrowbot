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
        let sebep = args.slice(1).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setAuthor('Uyarı!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!uyarı-ekle ${message.author} deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setAuthor('Uyarı!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!uyarı-ekle ${message.author} deneme`)
            .setColor('#04F9EC')
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(cmfhata)
        }        

        if(kullanıcı && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setAuthor("Uyarı!", message.author.displayAvatarURL())
            .setDescription(`${kullanıcı} kullanıcısı **${sebep}** sebebiyle uyarıldı.`)
            .setColor("#04F9EC")
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send(cmfmute)

        }
}
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uyarıver','Uyarıver','UyarıVer','Uyarı-ekle','uyarı-ekle'],
    permLevel: 0
}

exports.help = {
    name: 'Uyari-ekle'
}