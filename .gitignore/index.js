const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("omg, !help");
    console.log("Le bot est activée");
});

bot.login("NDEwMDIzNDg1NzQ2NzA4NDgx.DVnJMQ.v5s4K63nf8bETIR9oU6SIhUbWG0");
