const Discord = require("discord.js");
const client = new Discord.Client();

const token = "Njk3NzI5MTYxMTA3NjAzNDk2.Xo7hBQ.4Q1EWEepQYDb68deJhP_IfnjkPs";

client.on("ready", () => {
  console.log("Client ready");
});

let word = "play";

client.on("message", (msg) => {
  if (msg.content.toLocaleLowerCase().match(/(^|\W)play($|\W)/i)) {
    console.log(msg.author.username);
    msg.delete();

    let sendMsg = msg.content.replace("play", "paly");
    msg.reply(" " + sendMsg);
  }
});

client.login(token);
