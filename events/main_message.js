module.exports = {
    name: 'message',
    description: 'checks every message if its a command',
    eventHandler: (client, message) => {
        const fs = require("fs");
        const Discord = require("discord.js");
        const config = require("../config.json");

        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        client.commands = new Discord.Collection();

        const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            client.commands.set(command.name, command);
        }

        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
};