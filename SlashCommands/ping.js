const { Client, EmbedBuilder, CommandInteraction, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping!",
    type: ApplicationCommandType.ChatInput,
    /**
     * @param {Client} client   
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` })
    },
};