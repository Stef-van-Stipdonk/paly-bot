const Discord = require("discord.js");
const client = new Discord.Client();

const token = ""; // enter your own token here;

// on ready log to console
client.on("ready", () => {
  console.log("Client ready");
});

// the word to look for
let word = "play";

// on message send check if word matches
client.on("message", (msg) => {
  if (msg.content.toLocaleLowerCase().match(/(^|\W)play($|\W)/i)) {
    console.log(msg.author.username);
    msg.delete();

    let sendMsg = msg.content.replace("play", "paly");
    msg.channel.send(msg.author.username + ": " + sendMsg);
  }
});

client.login(token);
