const fetch = require('node-fetch');
const playerRanks = [
    {
        "name": "1",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/1.png"
    },
    {
        "name": "2",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/2.png"
    },
    {
        "name": "3",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/3.png"
    },
    {
        "name": "4",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/4.png"
    },
    {
        "name": "5",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/5.png"
    },
    {
        "name": "6",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/6.png"
    },
    {
        "name": "7",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/7.png"
    },
    {
        "name": "8",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/8.png"
    },
    {
        "name": "9",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/9.png"
    },
    {
        "name": "10",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/10.png"
    },
    {
        "name": "11",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/11.png"
    },
    {
        "name": "12",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/12.png"
    },
    {
        "name": "13",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/13.png"
    },
    {
        "name": "14",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/14.png"
    },
    {
        "name": "15",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/15.png"
    },
    {
        "name": "16",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/16.png"
    },
    {
        "name": "17",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/17.png"
    },
    {
        "name": "18",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/18.png"
    },
    {
        "name": "19",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/19.png"
    },
    {
        "name": "20",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/20.png"
    },
    {
        "name": "21",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/21.png"
    },
    {
        "name": "22",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/22.png"
    },
    {
        "name": "23",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/23.png"
    },
    {
        "name": "24",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/24.png"
    },
    {
        "name": "25",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/25.png"
    },
    {
        "name": "26",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/26.png"
    },
    {
        "name": "27",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/27.png"
    },
    {
        "name": "28",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/28.png"
    },
    {
        "name": "29",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/29.png"
    },
    {
        "name": "30",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/30.png"
    },
    {
        "name": "31",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/31.png"
    },
    {
        "name": "32",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/32.png"
    },
    {
        "name": "33",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/33.png"
    },
    {
        "name": "34",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/34.png"
    },
    {
        "name": "35",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/35.png"
    },
    {
        "name": "36",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/36.png"
    },
    {
        "name": "37",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/37.png"
    },
    {
        "name": "38",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/38.png"
    },
    {
        "name": "39",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/39.png"
    },
    {
        "name": "40",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/40.png"
    },
    {
        "name": "41",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/41.png"
    },
    {
        "name": "42",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/42.png"
    },
    {
        "name": "43",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/43.png"
    },
    {
        "name": "44",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/44.png"
    },
    {
        "name": "45",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/45.png"
    },
    {
        "name": "46",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/46.png"
    },
    {
        "name": "47",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/47.png"
    },
    {
        "name": "48",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/48.png"
    },
    {
        "name": "49",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/49.png"
    },
    {
        "name": "50",
        "image": "https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/50.png"
    }
];

function timestamp() {
    return new Date().toLocaleString();
}
async function getChannelName(client, channel) {
    return await client.channels.fetch(channel).then((e) => `#${e.name || 'unknown'}`);
}
function getPlaylistRank(source) {
    source = ((source - 1) <= 0) ? 0 : (source - 1);
    if (source > playerRanks.length)
        source = playerRanks.length;
    return playerRanks[source] || playerRanks[0];
}
function getPlaylistName(source) {
    switch (source) {
        //Social
        case 'composerSmallPC': 	   return 'Team Doubles (All)';
        case 'composerMediumPC': 	   return 'Team Slayer (All)';
        case 'composerLargePC' : 	   return 'Big Team Battle (All)';
        case 'composerRumblePC': 	   return 'FFA (All)';
        case 'composerInfectionPC':    return 'Infection (All)';
        //Ranked
        case 'hrFirefightArcade0PC':   return 'Firefight Arcade (Reach)';
        case 'hrFirefightDouble0PC':   return 'Firefight Doubles (Reach)';
        case 'hrRankedTeamSlayer0PC':  return 'Team Slayer (Reach)';
        //Hardcore
        case 'HCERankedDoubles1PC':    return 'Team Doubles (HCE)';
        case 'h2cRankedHardcore1PC':   return 'Team Hardcore (H2C)';
        case 'h2aRankedHardcore1PC':   return 'Team Hardcore (H2A)';
        case 'hrHardcore0PC': 		   return 'Team Hardcore (Reach)';
        default:
            return source;
    }
}
async function getPlaylistStats(gamertag) {
    return new Promise(async (stats, error) => {
        try {
            await fetch(`https://api.tracker.gg/api/v2/halo-mcc/standard/profile/xbl/${gamertag}`)
                .then((resp) => resp.json())
                .then((data) => {
                    let errors = data.hasOwnProperty('errors') ? true : false;
                    if (errors)
                        throw errors[0]['message'] || 'Failed to find the specified player';
                    else {
                        let hoppers = data['data']['segments'] || [];
                        if (hoppers && hoppers.length <= 0)
                            throw 'The specified player has not played any games';
                        else {
                            var playlistStats = [];
                            hoppers.forEach((hopper) => {                                    
                                var playlistType = hopper['type'] || null;
                                if (playlistType && playlistType === 'playlist') {
                                    var name = hopper['attributes']['hopperName'] || null;
                                    if (name) {
                                        let playlistRank = hopper['stats']['rankedHalo2Level']['value'] || 1;
                                        let playlistData  = {
                                            type: '',
                                            name: getPlaylistName(name),
                                            started: hopper['stats']['gamesStarted']['value'] || 0,
                                            completed: hopper['stats']['gamesCompleted']['value'] || 0,
                                            penalties: hopper['stats']['penaltiesApplied']['value'] || 0,
                                            rank: {
                                                value: playlistRank,
                                                image: getPlaylistRank(playlistRank).image
                                            }
                                        };
                                        switch (name) {
                                            //Social
                                            case 'composerSmallPC':
                                            case 'composerMediumPC':
                                            case 'composerLargePC' :
                                            case 'composerRumblePC':
                                            case 'composerInfectionPC':
                                                playlistData.type = 'social';
                                                playlistStats.push(playlistData);
                                                break;
                                            //Ranked
                                            case 'hrFirefightArcade0PC':
                                            case 'hrFirefightDouble0PC':
                                            case 'hrRankedTeamSlayer0PC':
                                                playlistData.type = 'ranked';
                                                playlistStats.push(playlistData);
                                                break;
                                            //Hardcore
                                            case 'HCERankedDoubles1PC':
                                            case 'h2cRankedHardcore1PC':
                                            case 'h2aRankedHardcore1PC':
                                            case 'hrHardcore0PC':
                                                playlistData.type = 'hardcore';
                                                playlistStats.push(playlistData);
                                                break;
                                        }

                                    }
                                }
                            });
                        }
                        stats(playlistStats);
                    }
                })
                .catch((error) => {
                    throw 'Could not retrieve player information';
                });
        } 
        catch (e) {
            error(e);
        }
    });

}

module.exports = {

    timestamp: timestamp(),
    getChannelName: (client, channel) => getChannelName(client, channel),
    getPlaylistRank:(source) => getPlaylistRank(source),
    getPlaylistName: (source) => getPlaylistName(source),
    getPlaylistStats: (gamertag) => getPlaylistStats(gamertag)

};