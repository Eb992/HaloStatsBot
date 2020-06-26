const utilities = require('../utilities');

async function execute(message, command) {
	return new Promise(async (executed) => {
		try {
			await utilities.getPlayerRecentGames(command.args)
				.then(async (match, error) => {
					if (error) {
						await message
							.reply({
								embed: {
									color: `#${process.env.COLOR_ERROR}`,
									description: error
								}
							})
							.then((r) => r.delete({ timeout: 10000 }))
							.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
					}
					else {
						await message
							.reply({
								embed: {
									color: (match.won) ? `#${process.env.COLOR_SUCCESS}` : `#${process.env.COLOR_ERROR}`,
									author: {
										name: command.args,
										icon_url: await utilities.getPlayerEmblem(command.args).then((emblem) => (emblem) ? emblem : ''),
										url: `https://www.mccstats.com/profile/${command.args}`
									},
									title: `${match.type} on ${match.map.name}`,
									description: match.date,
									fields: [
										{
											name: 'Kills',
											value: match.kills,
											inline: true,
										},
										{
											name: 'Deaths',
											value: match.deaths,
											inline: true,
										},
										{
											name: 'Ratio',
											value: match.ratio.toFixed(2),
											inline: true,
										},
										{
											name: 'Score',
											value: match.score,
											inline: true,
										},
										{
											name: 'Assists',
											value: match.assists,
											inline: true,
										},
										{
											name: 'Headshots',
											value: match.headshots,
											inline: true,
										},
										{
											name: 'Medals',
											value: match.medals,
											inline: true,
										},
									],
									image: {
										url: match.map.image,
									},
									footer: {
										text: 'Some footer text here'
									},
								}
							})
							.then((r) => r.delete({ timeout: 20000 }))
							.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
					}
				});
		}
		catch (e) {
			console.error('[STATS-RECENT-EXECUTE]', 'There was an error during command execution');
		}
		finally {
			executed();
		}
	});
}

module.exports = {
	name: 'recent',
	command: '!recent',
	description: 'A command to fetch recent game stats for a player',
	execute: (message, command) => execute(message, command)
}