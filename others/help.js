const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(` `)
    .setTitle(`**Rayal Help**`)
    .setDescription(`

 |**User Commands**

> \`invite . support . about . ping . prefix . uptime\`


 |**Music Commands**
> \`play . skip . skipto . stop . volume . nowplaying . shuffle . search . resume . remove . queue . loop . lyrics . radio\`


**Links**


[Support](https://discord.gg/mwJmT7wkwn)
[Invite](https://discord.com/oauth2/authorize?client_id=876902868110696500&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
