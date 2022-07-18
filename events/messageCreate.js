const { Client } = require("discord.js");
const config = require("../config.json");

/**
 * @param {Client} client
 */

module.exports = async (client) => {
  try {
    client.on("messageCreate", async (message) => {
      if (!message.guild) return;
      if (message.author.bot) return;
      if (message.content.indexOf(config.bot.prefix) !== 0) return;
      const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/g);
      const query = args.shift().toLowerCase();
      const command = client.commands.get(query);
      if (!command) return;
      await command.run(client, message, args);
    });
  } catch (err) {
    console.log(err.message);
  }
};
