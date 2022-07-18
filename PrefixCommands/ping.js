const { Client, Message } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping!",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        message.reply({content: `**${client.ws.ping}**ms!`})
    },
};
