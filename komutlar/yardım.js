const Discord = require('discord.js')

exports.run = async (client, message, args) => {

//EXTRA KOMUTU
    if(args[0] === "Extra" || args[0] === "extra") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Extra', message.author.displayAvatarURL())
  .setColor('#04F9EC')
  .setDescription(`**m!kullanıcı-bilgi <@Üye>** - İstenen kullanıcı hakkında bilgi verir. \n **m!avatar <@Üye>** -  İstenen üyenin avatarını gösterir. \n **m!davet** - Botu sunucunuza davet eder. \n **m!emojiler** - Sunucudaki emojileri listeler. \n **m!roller** - Sunucudaki rolleri listeler. \n **m!mayın** - Mayın tarlası oyunu. \n **m!karaliste** - Bot sahiplerinin özel komutu.`)
  .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
              return message.channel.send(Genel)
         
       
       return;
    }

//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Eglence" || args[0] === "eglence") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#04F9EC')
  .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#04F9EC')
  .setDescription(`**m!ban <@Üye> <Sebep>** - Üyeyi sunucudan yasaklar. \n **m!ban-kaldır <Üye ID> <Sebep>** - İdsi girilen üyenin yasağını kaldırır. \n **m!kick <@Üye> <Sebep>** - Üyeyi sunucudan atar. \n **m!mute <@Üye> <Süre> <Sebep>** - Üyeyi sunucudan susturur. \n **m!unmute <@Üye> <Sebep>** - Üyenin susturulmasını kaldırır. \n **m!sil <sayı>** -  İstenen miktarda mesaj sildirir. \n **m!yavaşmod <sayı>** - Kanala yazı süresi ekler. \n **m!ceza-rol <@Rol>** - Mute rolünü ayarlar. \n **m!rol-al <@Üye> <@Rol>** - İstenen üyenin rolünü alır. \n **m!rol-ver <@Üye> <@Rol>** - İstenen üyeye rol verir. \n **m!linkengel** - Sunucuda link atılmasını engeller. \n **m!otorol <@Rol>** - Yeni üyelere verilecek rol. \n **m!otorol-kapat** - Yeni gelen üyelere rol vermeyi engeller. \n **m!kayıt-rol <@Rol>** - Kayıt rolünü ayarlar. \n **m!kayıt <@Üye> <isim/yaş>** - İsim ve yaşla kayıt edebilirsiniz. \n **m!kayıt-rol-kapat** - Kayıt ederken rol vermesini engeller.`)
  .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
   return message.channel.send(Moderasyon)
             
       
               return;
  }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setColor('#04F9EC')
  .setDescription(`Merhaba, \ \n Benimle ilgilendiğini gördüğüme sevindim, o yüzden sana neler \ \n yapabilceğime dair kısa bir giriş yapayım! \ \n\n Müzik komutlarından moderasyon komutlarına, çeşitli oyun \ \n komutlarına ve çok daha \ \n fazlasına kadar kullanılacak birçok komut var! Herhangi bir komutu \n kullanmak için varsayılan \ \n işleri kolaylaştırmak için komutlar birkaç kategoriye ayrılmıştır.`)
  .addField('Komut Kategorileri', `
  m!yardım Moderasyon](https://www.marrow.com.tr/komutlar/moderasyon.php)
  m!yardım Extra](https://www.marrow.com.tr/komutlar/extra.php)
  m!yardım Eğlence](https://www.marrow.com.tr/komutlar/eglence.php)
  `)
  .addField(":traffic_light: Linkler", `[Destek Sunucusu](https://discord.gg/31)`  + "** | **" + `[Oy Ver](https://bit.ly/3980hKq)`  + "** | **" + `[Web Sitesi](https://www.marrow.com.tr/)  `, false)

  .setFooter('Sorgulayan: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y', 'yardim'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
