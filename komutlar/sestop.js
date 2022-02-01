const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')

    exports.run = async(client, message, args) => {
    if (message.channel.type !== 'dm') {
    
        let kullanıcı = message.mentions.members.first();
        let sebep = args.slice(1).join(' ')

            const cmfmute = new Discord.MessageEmbed()
            .setAuthor("%{message.author}!", message.author.displayAvatarURL())
            .setDescription(`Bu komut sayesinde kişinin ses aktifliğini görebilirsin. \n\n Toplam Ses: **.** \n Haftalık Ses: **.** \n Günlük Ses: **.**`)
            .setColor("#04F9EC")
            .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send(cmfmute)

        }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uyarıver','Uyarıver','UyarıVer','Uyarı-ekle','uyarı-ekle'],
    permLevel: 0
}

exports.help = {
    name: 'voice'
}