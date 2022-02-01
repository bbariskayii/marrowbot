const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')

    exports.run = async(client, message, args) => {
    if (message.channel.type !== 'dm') {
    
        let kullanıcı = message.mentions.members.first();
        let sebep = args.slice(1).join(' ')

            const cmfmute = new Discord.MessageEmbed()
            .setAuthor("Ses aktifliği: " + message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Bu komut sayesinde kişinin ses aktifliğini görebilirsin. \n\n Toplam Ses: **1 dakika 7 saniye** \n Haftalık Ses: **1 dakika 2 saniye** \n Günlük Ses: **5 saniye** \n \n Durum: **KÖTÜ**`)
            .setFooter('Görüntüleyen: ' + message.author.tag, message.author.displayAvatarURL())
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