const fetch = require('node-fetch');

require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client({
	disableEveryone: false
});
const commands = require('./scripts/commands');
const settings = require('./scripts/settings');
const utilities = require('./scripts/utilities');
process.on('uncaughtException', (e, o) => {
	console.log('[UNHANDLED ERROR]', e, o);
});

client.on('ready', async () => {
	try {
		await commands.load(client)
			.then(async () => {
				console.info(`[${utilities.timestamp}] > Bot is now running!`);
			});
	}
	catch (e) {
		console.error('', e);
	}
});

client.on('message', async (message) => {
	try {

		if (message.author.bot) 
			return;
		if (message.content.startsWith(process.env.BOT_PREFIX) === false) 
			return;
		
		let command = commands.build(message);
		if (command === null) {
			return;
		}
		else {
			switch (command.type) {
				case '!stats': {
					await message.delete();
					switch (command.name) {
						case 'social': return await client.commands.get('social').execute(message, command);
						case 'ranked': return await client.commands.get('ranked').execute(message, command);
						default:
							return await message
								.reply({
									embed: {
										color: 0xd32f2f,
										title: '!stats',
										description: 'Missing required arguments!',
										fields: [
											{
												name: 'Command',
												value: "!stats <social|ranked> <gamertag>"
											}
										],
										footer: {
											text: 'Auto destruct in 5 seconds..'
										}
									}
								})
								.then(reply => {
									reply.delete({ timeout: 5000 });
								})
								.catch(error => {
									console.log(error);
								});
					}
				}
			}
		}
	}
	catch (e) {
		console.error('', e);
	}
});

client.login(process.env.CLIENT_TOKEN);