const fetch = require('node-fetch');

const getPlaylistName = (source) => {
	switch (source) {
		case 'HCERankedDoubles1PC':   return 'HC Team Doubles (HCE)';
		case 'h2cRankedHardcore1PC':  return 'HC Team Slayer (H2)';
		case 'hrHardcore0PC': 		  return 'HC Team Slayer (Reach)';
		case 'hrFirefightArcade0PC':  return 'Firefight Arcade (Reach)';
		case 'hrFirefightDouble0PC':  return 'Firefight Doubles (Reach)';
		case 'hrRankedTeamSlayer0PC': return 'Team Slayer (Reach)';
		default: 
			return source;
	}
};

async function execute(message, command) {
	return new Promise(async (executed) => {        
		try {

			await retrieve(command.args)
				.then(stats => {
					if (stats && stats.length <= 0) {
						message
							.reply({
								embed: {
									color: `#${process.env.COLOR_WARNING}`,
									description: 'Player has not played any games'
								}
							})						
							.then((r) => r.delete({ timeout: 10000 }))
							.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
					}
					else {
						message
							.reply({
								embed: {
									color: `#${process.env.COLOR_SUCCESS}`,
									title: command.args,
									url: encodeURI(`https://tracker.gg/halo-mcc/profile/${command.args}/overview`),
									thumbnail: {
										url: 'https://fantalitystudios.ca/resources/assets/images/logos/xbox/xbox-green.png',
									},
									fields: stats,
									footer: 'Ranked Playlist Stats'
								}
							})
							.then((r) => r.delete({ timeout: 15000 }))
							.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
					}
				})
				.catch(error => {
					message
						.reply({
							embed: {
								color: `#${process.env.COLOR_ERROR}`,
								description: error || 'Failed to retrieve player stats',
							}
						})
						.then(reply => {
							reply.delete({ timeout: 5000 });
						})
						.catch(error => {
							console.log(error);
						});
				});

		}
		catch (e) {
			console.error('[STATS-RANKED-EXECUTE]', 'There was an error during command execution');
		}
		finally {
			executed();
		}
	});
}

async function retrieve(gamertag) {
	return new Promise(async (success, error) => {
		try {
		
			await fetch(`https://api.tracker.gg/api/v2/halo-mcc/standard/profile/xbl/${gamertag}`)
				.then((resp) => resp.json())
				.then((data) => {
	
					let errors = data.hasOwnProperty('errors') ? true : false;
					if (errors)
						error(errors[0]['message'] || 'Unable to find the specified gamertag');
					else {

						let results = [];
						let hoppers = data['data']['segments'];
						hoppers.forEach((hopper) => {
							var type = hopper['type'] || null;
							if (type && type === 'playlist') {
								var name = hopper['attributes']['hopperName'] || null;
								if (name) {
									let rank = 1;
									switch (name) {
										//Ranked
										case 'HCERankedDoubles1PC':
										case 'h2cRankedHardcore1PC':
										case 'hrHardcore0PC':
										case 'hrFirefightArcade0PC':
										case 'hrFirefightDouble0PC':
										case 'hrRankedTeamSlayer0PC':

											rank = hopper['stats']['rankedHalo2Level']['value'] || 1;
											results.push({
												name: getPlaylistName(name),
												value: rank,
												inline: true
											});

											break;

										default:
											break;

									}
								}
							}
						});
		
						success(results);

					}
	
				});
	
		} 
		catch (e) {
			
		}
	});
}

//#endregion
//#region Exports

module.exports = {
	name: 'ranked',
	command: '!stats ranked',
	description: 'A command to fetch ranked player stats',
	execute: (message, command) => execute(message, command)
}

//#endregion