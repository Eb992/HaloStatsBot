require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client({
	disableEveryone: false
});
const commands = require('./scripts/commands');
const utilities = require('./scripts/utilities');

process.on('uncaughtException', (e, o) => {
	console.log('[UNHANDLED ERROR]', e, o);
});

const isKnownCommand = (value) => {
	switch (value.toLowerCase()) {
		case '!hc':
		case '!social':
		case '!ranked': 
		case '!recent': return true;
		default:
			return false;
	}
};

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

		await message.delete()
			.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));

		if (message.channel.id !== process.env.BOT_CHANNEL || message.channel.id !== '724349125570855072') {
			let name = await utilities.getChannelName(client, process.env.BOT_CHANNEL);
			await message
				.reply({
					embed: {
						color: `#${process.env.COLOR_ERROR}`,
						title: 'Stats',
						description: `Oops! Stats can only be accessed within ${name}`,
						footer: {
							text: 'Auto destruct in 10 seconds..'
						}
					}
				})
				.then((r) => r.delete({ timeout: 10000 }))
				.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
		}
		else {

			let command = commands.build(message);
			if (command === null || !isKnownCommand(command.type)) {
				await message
					.reply({
						embed: {
							color: `#${process.env.COLOR_ERROR}`,
							title: 'Stats',
							description: `The specified command '${command.type}' is not valid! Examples:`,
							fields: [
								{
									name: 'Social',
									value: '**!social** *<gamertag>*',
									inline: true
								},
								{
									name: 'Ranked',
									value: '**!ranked** *<gamertag>*',
									inline: true
								},								
								{
									name: 'Hardcore',
									value: '**!hc** *<gamertag>*',
									inline: true
								},
							],
							footer: {
								text: 'Auto destruct in 10 seconds..'
							}
						}
					})
					.then((r) => r.delete({ timeout: 10000 }))
					.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
			}
			else {
				switch (command.type) {
					case '!hc': return await client.commands.get('hardcore').execute(message, command);					
					case '!social':
					case '!ranked': 
						switch (command.type) {				
							case '!social': return await client.commands.get('social').execute(message, command);
							case '!ranked': return await client.commands.get('ranked').execute(message, command);
						}
					break;
					case '!recent': return await client.commands.get('recent').execute(message, command);
				}

			}

		}

	}
	catch (e) {
		console.error('', e);
	}
});

client.login(process.env.CLIENT_TOKEN);