const Discord = require('discord.js')
const db = require('croxydb');


const embed1 = new Discord.MessageEmbed()
.setTitle('Bu komutu sadece botun sahibi kullanabilir.')
.setColor('BLUE')

const embed2 = new Discord.MessageEmbed()
    .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!karaliste ekle <Üye ID> <Sebep> \n m!karaliste çıkar <Üye ID>`)
    .setColor('#04F9EC')

const embed3 = new Discord.MessageEmbed()
.setTitle('Bir kişiyi etiketlemelisin veya id sini yazmalısın.')
.setColor('BLUE')

exports.run = async(client, message, args) => {  

        let sebep = args.slice(2).join(' ');
  
          if(!sebep){
            const sebephata = new Discord.MessageEmbed()
            .setAuthor('Karaliste!', message.author.displayAvatarURL())
            .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!karaliste ekle <Üye ID> <Sebep> \n m!karaliste çıkar <Üye ID> <Sebep>`)
            .setColor('#04F9EC')
            .setFooter('Sahip: ' + message.author.tag, message.author.displayAvatarURL())
            return message.channel.send(sebephata)
        }
let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
if(!args[0]) return message.channel.send(embed2)
switch(args[0]) {
  case "ekle":
    if (!user) return message.channel.send(embed3)

   
    db.set(`karaliste.${user.id}`, true)
const embed4 = new Discord.MessageEmbed()
.setAuthor('Karaliste!', message.author.displayAvatarURL())
.setDescription(`**${user.tag}** isimli kullanıcı **${sebep}** sebebiyle karalisteye eklendi! \n Artık Marrow'un süper komutlarından yararlanamıcak.`)
.setColor('#04F9EC')
.setFooter('Sahip: ' + message.author.tag, message.author.displayAvatarURL())

    message.channel.send(embed4)
    break;
  case "çıkar":
    if (!user) return message.channel.send(embed3)
    db.delete(`karaliste.${user.id}`)
    const embed5 = new Discord.MessageEmbed()
.setAuthor('Karaliste!', message.author.displayAvatarURL())
.setDescription(`**${user.tag}** isimli kullanıcı **${sebep}** sebebiyle karalisteden çıkarıldı! \n Artık Marrow'un süper komutlarından yararlanabilir.`)
.setColor('#04F9EC')
.setFooter('Sahip: ' + message.author.tag, message.author.displayAvatarURL())
    message.channel.send(embed5)
    break;
  case "bilgi":
    if (!user) return message.channel.send(embed3)
let i = db.fetch(`karaliste.${user.id}`)

const embed6 = new Discord.MessageEmbed()
.setTitle(`\`${user.tag}\` botu şu anda **kullanamıyor.** \nkendisi karalistede.`)
.setColor('BLUE')

const embed7 = new Discord.MessageEmbed()
.setTitle(`\`${user.tag}\` botu şu anda **kullanabiliyor.** \nkendisi karalistede bulunmuyor.`)
.setColor('BLUE')

      if(i == true) message.channel.send(embed6)
      else message.channel.send(embed7)
    break;
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste","blacklist","black-list"],
  permLevel: 4
};

exports.help = {
  name: "kara-liste",
  description: "Bot kişiyi kara listeye alır.",
  usage: "kara-liste"
};