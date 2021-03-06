// <=========> Define Variables, Modules <=========> //

// Discord imports
const Discord = require('discord.js');
const client = new Discord.Client();

// Module imports
require('dotenv').config();
const { EventResponse } = require('./modules/onMessage')

// Define Variable
const { customMessage } = require('./modules/customMessage')
const welcome = client.channels.cache.get('764855446938189836')

// <=========> Status Message <=========> //

client.once('ready', () => {
    console.log("Bot is online!")
})

// <=========> Listen for messages <=========> //

client.on('message', message => {
    EventResponse(message, client);
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.find(channel => channel.name === 'welkom').send(customMessage.welcomeMessage(member.user, client))
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.find(channel => channel.name === 'welkom').send(customMessage.leaveMessage(member.user, client))
})

// <=========> Login to the discord bot client <=========> //

client.login(process.env.BOT_TOKEN)