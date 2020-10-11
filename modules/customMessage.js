// <=========> Define Variables, Modules <=========> //

// Discord Module
const Discord = require('discord.js');

let getMemberCount = (client) => {
    return client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
 };
// Define Variables
const defaultColor = '#0099ff'
const defaultAuthor = 'Loyalty Community'

// Custom messages
const customMessage = {
    welcomeMessage: (Author, client) => {
        return new Discord.MessageEmbed()
        .setColor(defaultColor)
        .setTitle(Author.username + ", Welkom in Loyalty Community!")
        .setAuthor(defaultAuthor)
        .setDescription("Vergeet niet de regels even door te lezen!")
        .setDescription("Je bent member: " + getMemberCount(client))
        .setThumbnail(Author.avatarURL())
    },
    leaveMessage: (Author, client) => {
        return new Discord.MessageEmbed()
        .setColor(defaultColor)
        .setTitle(Author.username + ' heeft ons verlaten!')
        .setAuthor(defaultAuthor)
        .setDescription("Loyalty heeft nu " + getMemberCount(client) + " leden")
        .setThumbnail(Author.avatarURL())
    },
    help: () => {
        return new Discord.MessageEmbed()
        .setColor(defaultColor)
        .setTitle('Loyalty Bot command list')
        .setAuthor(defaultAuthor)
        .addFields(
            { name: '\u200B', value: '+help', inline: true },
            { name: '\u200B', value: '=>', inline: true },
            { name: '\u200B', value: 'Overzicht van commands', inline: true },

            { name: '\u200B', value: '+pannenkoek', inline: true },
            { name: '\u200B', value: '=>', inline: true },
            { name: '\u200B', value: 'Anouks custom command', inline: true },

            { name: '\u200B', value: '+dewa', inline: true },
            { name: '\u200B', value: '=>', inline: true },
            { name: '\u200B', value: "Dewa's custom command", inline: true },

            { name: '\u200B', value: '+muntrix', inline: true },
            { name: '\u200B', value: '=>', inline: true },
            { name: '\u200B', value: 'Muntrix custom command', inline: true },
        )
        .setThumbnail("https://cdn.discordapp.com/attachments/467097987961716736/755667931680997446/wolf-rainbow.png")
    },

    pannenkoek: () => {
        return new Discord.MessageEmbed()
        .setColor(defaultColor)
        .setTitle('Anouk is de enige echte pannenkoek')
        .setAuthor(defaultAuthor)
        .setThumbnail("https://cdn.discordapp.com/attachments/430655027284148225/764628105783803924/Z.png")
    },

    muntrix: () => {
        return new Discord.MessageEmbed()
        .setColor(defaultColor)
        .setTitle('"Geef me smoochie op me eikel dan!" ~ Muntrix')
        .setAuthor(defaultAuthor)
        .setThumbnail("https://cdn.discordapp.com/attachments/430655027284148225/764631803671085136/women-love-huge-balls.png")
    },

    dewa: () => {
        return new Discord.MessageEmbed()
        .setColor(defaultColor)
        .setTitle('"Geef mij rijstbal" ~ Anouk')
        .setAuthor(defaultAuthor)
        .setThumbnail("https://cdn.discordapp.com/attachments/430655027284148225/764632694150660116/6999653703_821e0d2665_z.png")
    }
}

module.exports = { customMessage }