const { Collection, Client } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const ArrayOfSlashCmds = [];
const config = require("../config.json");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {

    try {

        // Komutlar İçin Collection
        client.slashcmds = new Collection();
        client.commands = new Collection();

        // Prefix Komutların Bulunması ve Kayıt Ettirilmesi
        const PrefixCmds = await globPromise(`${process.cwd()}/Commands/*.js`);
        PrefixCmds.map((value) => {
            const file = require(value);
            client.commands.set(file.name, file);
        });

        // Slash Komutların Bulunması ve Kayıt Ettirilmesi
        const SlashCmds = await globPromise(`${process.cwd()}/SlashCommands/*.js`);
        SlashCmds.map((value) => {
            const file = require(value);
            client.slashcmds.set(file.name, file);
            ArrayOfSlashCmds.push(file);
        });

        // Komutları Kaydetme Kısmı
        client.on("ready", async () => {
            
            // Tek Sunucu İçin
            const guild = client.guilds.cache.get(config.bot.guildID);
            await guild.commands.set(ArrayOfSlashCmds).catch(() => { console.log(err.message); });
            console.log("Komutlar kaydedildi.");

            // Global Komut Kaydetme
            // await client.application.commands.set(ArrayOfSlashCmds);
        });

    } catch (err) {
        console.log(err.message);
    }

};