const { Client } = require("discord.js");

/**
 * @param {Client} client
 */

module.exports = async (client) => {

    try {

        client.on("ready", async () => {
            console.log(`${client.user.username} giriş yaptı.`)
        });

    } catch (err) {
        console.log(err.message);
    }

}