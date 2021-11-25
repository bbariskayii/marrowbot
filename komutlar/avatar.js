const Discord = require('discord.js')

    exports.run = (client, message, args) =>{
        let kullanıcı = message.mentions.members.first();

        if(kullanıcı){
            const avatar = new Discord.MessageEmbed()
            .setAuthor('Avatar!', message.author.displayAvatarURL())
            .setColor('#04F9EC')
            .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(avatar)
        } else {
            const avatar = new Discord.MessageEmbed()
            .setAuthor('Avatar!', message.author.displayAvatarURL())
            .setColor('#04F9EC')
            .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(avatar)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Avatar','pp','Pp'],
    permLevel : 0
}

exports.help = {
    name: 'avatar'
}