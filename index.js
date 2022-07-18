// Tanımlar
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
    shards: "auto",
    intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction, Partials.GuildScheduledEvent, Partials.ThreadMember, Partials.User],
    allowedMentions: { repliedUser: false, parse: ["everyone","users","roles"] }
});
const fs = require("fs");
const config = require("./config.json");

// FS Event Yükleyici
fs.readdirSync("./events").forEach(async (file) => {
    if (file.endsWith(".js")) {
        const eventname = file.split(".")[0]
        const event = require(`./events/${file}`)
        event(client)
        console.log(`Yüklenen Event: ${eventname}`)
    } else return
});

// Utils
require("./utils/cmdRegistration")(client);

// Giriş Yapma
client.login(config.bot.token).catch((err) => { console.log(err.message) });