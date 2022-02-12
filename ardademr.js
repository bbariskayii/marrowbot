const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const moment = require("moment");
const disbut = require('discord-buttons');
const db = require('quick.db');
const fs = require('fs');
disbut(client);
const app = express();
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Marrow bot by owner Barış KAYI");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`[M-Shield] Komut yükleniyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[M-Shield] Etkinlik kuruluyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`[M-Shield] Marrow isimli bot aktif edildi!`);
});

client.login(process.env.TOKEN);



  let erkek = "BURAYA ID GIR" // ERKEK ROL ID
  let kız = "BURAYA ID GIR" // KIZ ROL ID
  let kayıtsız = "BURAYA ID GIR" // SUNUCUYA GELENE OTO VERILECEK ROL ID
  let sunucu = "BURAYA ID GIR" // SUNUCU ID
  let hosgeldin = "BURAYA ID GIR" // HOŞGELDİN KANAL ID 
  
//------------------OTOMESAJ
client.on('guildMemberAdd', async member  => {
  if(member.guild.id!= sunucu) return false;
 let member2 = member.user 
 let zaman = new Date().getTime() - member2.createdAt.getTime()
 var user = member2 
 var ardademrzaman = [];
 if(zaman < 172800000) {
 ardademrzaman = `Hesap Yeni Açılmış`
 } else {
 ardademrzaman = `Hesap Yeni Açılmamış`}require("moment-duration-format");
   let zaman1 = new Date().getTime() - user.createdAt.getTime()
   const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    const ardademrembed = new Discord.MessageEmbed()
    .setColor('#efff00')
     .setDescription(`**Hoş Geldin:** ${member}\n**Discord'a Kayıt Olma Süresi:** ${gecen}\n**Hesap Yeni Mi?:** ${ardademrzaman}`)
 client.channels.cache.get(hosgeldin).send(ardademrembed)
   
           });

//------------------OTOROL
client.on("guildMemberAdd", member => {
  let rol = db.fetch(`otorol_${member.guild.id}`);
  if (!rol) return;
  let rolbulundu = member.guild.roles.cache.get(rol);
  if (!rolbulundu)
    return console.log(`${member.guild.name} Sunucusunda Rolü bulamadım! `);

  member.roles.add(rol);
    member.user.username +
      " Hoşgeldin " +
      rolbulundu.name +
      " Rolü Başarıyla verildi"
});

  
client.on('clickButton', (button) => {
  
  if (button.id === 'ardademrerkek') {
    db.add(`erkek_kayıt`,1)
     button.clicker.member.roles.add(erkek); 
    button.clicker.member.roles.remove(kayıtsız);
    button.clicker.member.roles.remove(kız);
  }
    if (button.id === 'ardademrkız') {
    db.add(`kız_kayıt`,1)
     button.clicker.member.roles.add(kız); 
    button.clicker.member.roles.remove(kayıtsız); 
       button.clicker.member.roles.remove(erkek); 
  }
})

client.on("ready",(button)=>{
  client.ws.on('INTERACTION_CREATE', async interaction => {
  
     if(interaction.data.custom_id=="ardademrerkek"){
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
          type: 4,
          data: {
              content: `Seni sunucumuza Erkek Üye olarak kayıt ettim. İyi eğlenceler.`,    
              flags: "64"
            }
        }
    }); 

   };
   
      if(interaction.data.custom_id=="ardademrkız"){
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
          type: 4,
          data: {
              content: `Seni sunucumuza Kız Üye olarak kayıt ettim. İyi eğlenceler.`,    
              flags: "64"
            }
        }
    }); 
   };
    });
  });

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

client.on("message", async message => {
  const lus = await db.fetch(`reklam_${message.guild.id}`);
  if (lus) {
    const reklamengel = [
      ".org",
      ".com",
      ".net",
      "http:",
      "https:",
      "https",
      "http",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          const embed = new Discord.MessageEmbed()
            .setAuthor("Uyarı!", client.user.avatarURL())
            .setDescription(`<@${message.author.id}> kullanıcısı **Reklam** sebebiyle uyarıldı.`)
            .setColor("#04F9EC")
            message.channel.send(embed)
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});
client.on("messageUpdate", async message => {
  const lus = await db.fetch(`reklam_${message.guild.id}`);
  if (lus) {
    const reklamengel = [
      ".org",
      ".com",
      ".net",
      "http:",
      "https:",
      "https",
      "http",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          const embed = new Discord.MessageEmbed()
            .setAuthor("Uyarı!", client.user.avatarURL())
            .setDescription(`<@${message.author.id}> kullanıcısı **Reklam** sebebiyle uyarıldı.`)
            .setColor("#04F9EC")
            message.channel.send(embed)
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});

client.on('message', message => {
if(message.content.startsWith(ayarlar.prefix)) {
const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.content.toLowerCase().startsWith(ayarlar.prefix + `emoji-ekle`)){
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor('Emoji Ekleme!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!emoji-ekle <EmojiIsmi> <URL>`)
      .setColor('#04F9EC')
      .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor('Emoji Ekleme!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!emoji-ekle <EmojiIsmi> <URL>`)
      .setColor('#04F9EC')
      .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
message.guild.emojis.create(args[1], args[0])
  .then(emoji => message.channel.send(`${emoji.name} isimli emoji oluşturuldu!`))
  .catch(err => {
  message.channel.send("Bir hata oluştu.\nHata: "+err)
  .catch(msgerr => {
  message.channel.send("Bir hata oluştu.\nHatayı yazdırırken hata oluştuğu için hatayı yazdırmadım ancak konsola gönderildi daha sonra tekrar deneyin!")    
  })
  console.error;
});
}  
}
});

client.on('message', message => {
if(message.content.startsWith(ayarlar.prefix)) {
const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.content.toLowerCase().startsWith(ayarlar.prefix + `emoji-sil`)){
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor('Emoji!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!emoji-sil <EmojiIsmi>`)
      .setColor('#04F9EC')
      .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
message.guild.emojis.create(args[1], args[0])
  .then(emoji => message.channel.send(`${emoji.name} isimli emoji silindi.`))
  .catch(err => {
  message.channel.send("Bir hata oluştu.\nHata: "+err)
  .catch(msgerr => {
  message.channel.send("Bir hata oluştu.\nHatayı yazdırırken hata oluştuğu için hatayı yazdırmadım ancak konsola gönderildi daha sonra tekrar deneyin!")    
  })
  console.error;
});
}  
}
});

client.login(ayarlar.token)

client.on("guildMemberAdd", member => {
  let rol = db.fetch(`otorol_${member.guild.id}`);
  if (!rol) return;
  let rolbulundu = member.guild.roles.cache.get(rol);
  if (!rolbulundu)
    return console.log(`${member.guild.name} Sunucusunda Rolü bulamadım! `);

  member.roles.add(rol);
    member.user.username +
      " Hoşgeldin " +
      rolbulundu.name +
      " Rolü Başarıyla verildi"
});

client.on('message', message => {
if(message.content.startsWith(ayarlar.prefix)) {
const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.content.toLowerCase().startsWith(ayarlar.prefix + `emoji-sil`)){
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor('Emoji Ekleme!', message.author.displayAvatarURL())
      .setDescription(`İşlem başarısız! \n \n **Örnek kullanımlar:** \n m!emoji-sil <EmojiIsmi>`)
      .setColor('#04F9EC')
      .setFooter('Yetkili: ' + message.author.tag, message.author.displayAvatarURL()));
message.emojis.delete(args[0])
  .then(emoji => message.channel.send(`${emoji.name} isimli emoji oluşturuldu!`))
  .catch(err => {
  message.channel.send("Bir hata oluştu.\nHata: "+err)
  .catch(msgerr => {
  message.channel.send("Bir hata oluştu.\nHatayı yazdırırken hata oluştuğu için hatayı yazdırmadım ancak konsola gönderildi daha sonra tekrar deneyin!")    
  })
  console.error;
});
}  
}
});


client.on('message', message => {
  // Data
  let sistem = db.fetch(`cmfsaas_${message.guild.id}`)
  
  // Sa
  var sa = ["Sa","SA","sa","Sea","sea","SEA"]

  if(sistem === 'aktif'){
    if(sa.includes(message.content.toLowerCase())){
      message.channel.send(`o neymiş, doğrusu: Selamün Aleyküm`)
    }
  } else {
    // Sistem Kapalıysa Bot İplemesin.
    return;
  }
})

client.on('message', message => {
  // Data
  let sistem = db.fetch(`cmfsaas_${message.guild.id}`)
  
  // as
  var sa = ["Selamün Aleyküm","selamün aleyküm","selamın aleykum","Selamın aleykum","Selamın aleyküm", "Selam", "selam"]

  if(sistem === 'aktif'){
    if(sa.includes(message.content.toLowerCase())){
      message.channel.send(`Aleyküm selam`)
    }
  } else {
    // Sistem Kapalıysa Bot İplemesin.
    return;
  }
})

client.login(process.env.TOKEN)