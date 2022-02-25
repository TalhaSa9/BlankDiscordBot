require("dotenv").config()

const { prefix } = require("./config.json")    // You can change bot prefix in config.json file.

const Discord = require("discord.js")
const bot = new Discord.Client({
    "intents": [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]     // You can customize intents here.
})

bot.on("ready", () => {
    console.log("Bot is online!")   // You can customize bot is online message here.
})

bot.on("messageCreate", (msg) => {
    if(msg.content === `${prefix}ping`) {   // You can customize your commands.
        msg.reply("Pong!")
    }
})

bot.login(process.env.TOKEN)    // Paste your bot token to .env file.