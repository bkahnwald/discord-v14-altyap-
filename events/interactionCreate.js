const { Client, InteractionType, ApplicationCommandOptionType } = require("discord.js");

/**
 * @param {Client} client
 */

module.exports = async (client) => {
    
    try {

        client.on("interactionCreate", async (interaction) => {

            // Slash Komut Handler
            if (interaction.isChatInputCommand()) {
                await interaction.deferReply().catch((err) => { console.log(err.message); });
                const command = client.slashcmds.get(interaction.commandName);
                if (!command) return interaction.followUp({ content: "Komut bulunamadı."});
                const args = [];
                for (let option of interaction.options.data) {
                  if (option.type === ApplicationCommandOptionType.Subcommand) {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                      if (x.value) args.push(x.value);
                    });
                  } else if (option.value) args.push(option.value);
                }
                await command.run(client, interaction, args);
              }
            
            // Context Menu Handler
            if (interaction.isContextMenuCommand()) {
                await interaction.deferReply().catch((err) => { console.log(err.message); });
                const command = client.slashcmds.get(interaction.commandName);
                if (command) await command.run(client, interaction);
            }
            
        })

    } catch (err) {
        console.log(err.message);
    }

}