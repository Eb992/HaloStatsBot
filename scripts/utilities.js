const fetch = require('node-fetch');

const gameMapTypes = [
    'Ctf', 
    'Slayer', 
    'Oddball', 
    'King of the Hill', 
    'Juggernaut', 
    'Infection', 
    'Flood', 
    'Race', 
    'Extraction', 
    'Dominion', 
    'Regicide', 
    'Grifball', 
    'Ricochet', 
    'Sandbox (FORGE)', 
    'VIP', 
    'Territories', 
    'Assault'
];
const gameMapNames = {
    'h1': {
        10: { 'name': 'Battle Creek', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/battlecreek.jpg'},
        11: { 'name': 'Sidewinder', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/sidewinder.jpg'},
        12: { 'name': 'Damnation', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/damnation.jpg'},
        13: { 'name': 'Rat Race', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/ratrace.jpg'},
        14: { 'name': 'Prisoner', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/prisoner.jpg'},
        15: { 'name': 'Hang em High', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/hangemhigh.jpg'},
        16: { 'name': 'Chill Out', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/chillout.jpg'},
        17: { 'name': 'Derelict', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/derelict.jpg'},
        18: { 'name': 'Boarding Action', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/boardingaction.jpg'},
        19: { 'name': 'Chiron TL-34', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/chirontl34.jpg'},
        20: { 'name': 'Blood Gulch', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/bloodgulch.jpg'},
        21: { 'name': 'Wizard', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/wizard.jpg'},
        22: { 'name': 'Longest', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/longest.jpg'},
        23: { 'name': 'Death Island', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/deathisland.jpg'},
        24: { 'name': 'Danger Canyon', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/dangercanyon.jpg'},
        25: { 'name': 'Infinity', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/infinity.jpg'},
        26: { 'name': 'Timberland', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/timberland.jpg'},
        27: { 'name': 'Ice Fields', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/icefields.jpg'},
        28: { 'name': 'Gephyrophobia', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h1/gephyrophobia.jpg'}
    },
    'h2': {
        44: { 'name': 'Lockout', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/lockout.jpg'},
        45: { 'name': 'Ascension', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/ascension.jpg'},
        46: { 'name': 'Midship', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/midship.jpg'},
        47: { 'name': 'Ivory Tower', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/ivorytower.jpg'},
        48: { 'name': 'Beaver Creek', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/beavercreek.jpg'},
        49: { 'name': 'Burial Mounds', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/burialmounds.jpg'},
        50: { 'name': 'Colossus', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/colossus.jpg'},
        51: { 'name': 'Zanzibar', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/zanzibar.jpg'},
        52: { 'name': 'Coagulation', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/coagulation.jpg'},
        53: { 'name': 'Headlong', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/headlong.jpg'},
        54: { 'name': 'Waterworks', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/waterworks.jpg'},
        55: { 'name': 'Foundation', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/foundation.jpg'},
        56: { 'name': 'Containment', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/containment.jpg'},
        57: { 'name': 'Warlock', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/warlock.jpg'},
        58: { 'name': 'Sanctuary', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/sanctuary.jpg'},
        59: { 'name': 'Turf', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/turf.jpg'},
        60: { 'name': 'Backwash', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/backwash.jpg'},
        61: { 'name': 'Elongation', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/elongation.jpg'},
        62: { 'name': 'Gemini', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/gemini.jpg'},
        63: { 'name': 'Relic', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/relic.jpg'},
        64: { 'name': 'Terminal', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/terminal.jpg'},
        65: { 'name': 'Desolation', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/desolation.jpg'},
        66: { 'name': 'Tombstone', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/tombstone.jpg'},
        67: { 'name': 'District', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/district.jpg'},
        68: { 'name': 'Uplift', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2/uplift.jpg'}
    },
    'h3': {
        79:  { 'name': 'Construct', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/construct.jpg'},
        80:  { 'name': 'Epitaph', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/epitaph.jpg'},
        81:  { 'name': 'Guardian', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/guardian.jpg'},
        82:  { 'name': 'High Ground', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/highground.jpg'},
        83:  { 'name': 'Isolation', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/isolation.jpg'},
        84:  { 'name': 'Last Resort', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/lastresort.jpg'},
        85:  { 'name': 'Narrows', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/narrows.jpg'},
        86:  { 'name': 'Sandtrap', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/sandtrap.jpg'},
        87:  { 'name': 'Snowbound', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/snowbound.jpg'},
        88:  { 'name': 'The Pit', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/thepit.jpg'},
        89:  { 'name': 'Valhalla', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/valhalla.jpg'},
        90:  { 'name': 'Foundry', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/foundry.jpg'},
        91:  { 'name': 'Rats Nest', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/ratsnest.jpg'},
        92:  { 'name': 'Standoff', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/standoff.jpg'},
        93:  { 'name': 'Avalanche', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/avalanche.jpg'},
        94:  { 'name': 'Blackout', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/blackout.jpg'},
        95:  { 'name': 'Ghost Town', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/ghosttown.jpg'},
        96:  { 'name': 'Cold Storage', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/coldstorage.jpg'},
        97:  { 'name': 'Assembly', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/assembly.jpg'},
        98:  { 'name': 'Orbital', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/orbital.jpg'},
        99:  { 'name': 'Sandbox', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/sandbox.jpg'},
        100: { 'name': 'Citadel', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/citadel.jpg'},
        101: { 'name': 'Heretic', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/heretic.jpg'},
        102: { 'name': 'Longshore', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h3/longshore.jpg'}
    },
    'h4': {
        114: { 'name': 'Adrift', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/adrift.jpg'},
        115: { 'name': 'Abandon', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/abandon.jpg'},
        116: { 'name': 'Complex', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/complex.jpg'},
        117: { 'name': 'Exile', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/exile.jpg'},
        118: { 'name': 'Haven', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/haven.jpg'},
        119: { 'name': 'Longbow', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/longbow.jpg'},
        120: { 'name': 'Meltdown', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/meltdown.jpg'},
        121: { 'name': 'Ragnarok', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/ragnarok.jpg'},
        122: { 'name': 'Solace', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/solace.jpg'},
        123: { 'name': 'Vortex', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/vortex.jpg'},
        124: { 'name': 'Settler', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/settler.jpg'},
        125: { 'name': 'Relay', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/relay.jpg'},
        126: { 'name': 'Ascent', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/ascent.jpg'},
        128: { 'name': 'Wreckage', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/wreckage.jpg'},
        129: { 'name': 'Harvest', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/harvest.jpg'},
        130: { 'name': 'Shatter', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/shatter.jpg'},
        131: { 'name': 'Landfall', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/landfall.jpg'},
        132: { 'name': 'Monolith', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/monolith.jpg'},
        133: { 'name': 'Skyline', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/skyline.jpg'},
        134: { 'name': 'Daybreak', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/daybreak.jpg'},
        135: { 'name': 'Outcast', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/outcast.jpg'},
        136: { 'name': 'Perdition', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/perdition.jpg'},
        137: { 'name': 'Pitfall', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/pitfall.jpg'},
        138: { 'name': 'Vertigo', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h4/vertigo.jpg'}
    },
    'h2a': {
        155: {'name': 'Lockdown', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/lockdown.jpg'},
        156: {'name': 'Zenith', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/zenith.jpg'},
        157: {'name': 'Stonetown', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/stonetown.jpg'},
        158: {'name': 'Bloodline', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/bloodline.jpg'},
        159: {'name': 'Warlord', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/warlord.jpg'},
        160: {'name': 'Shrine', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/shrine.jpg'},
        161: {'name': 'Remnant', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/remnant.jpg'},
        163: {'name': 'Awash', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/h2a/awash.jpg'}
    },
    'reach': {
        190: { 'name': 'Boardwalk', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/boardwalk.jpg'},
        191: { 'name': 'Boneyard', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/boneyard.jpg'},
        192: { 'name': 'Countdown', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/countdown.jpg'},
        193: { 'name': 'Powerhouse', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/powerhouse.jpg'},
        194: { 'name': 'Reflection', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/reflection.jpg'},
        195: { 'name': 'Spire', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/spire.jpg'},
        196: { 'name': 'Sword Base', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/swordbase.jpg'},
        197: { 'name': 'Zealot', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/zealot.jpg'},
        198: { 'name': 'Anchor 9', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/anchor9.jpg'},
        199: { 'name': 'Breakpoint', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/breakpoint.jpg'},
        200: { 'name': 'Tempest', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/tempest.jpg'},
        201: { 'name': 'Condemned', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/condemned.jpg'},
        202: { 'name': 'Highlands', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/highlands.jpg'},
        203: { 'name': 'Battle Canyon', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/battlecanyon.jpg'},
        204: { 'name': 'Penance', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/penance.jpg'},
        205: { 'name': 'Ridgeline', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/ridgeline.jpg'},
        206: { 'name': 'Solitary', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/solitary.jpg'},
        207: { 'name': 'High Noon', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/highnoon.jpg'},
        208: { 'name': 'Breakneck', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/breakneck.jpg'},
        209: { 'name': 'Forge World', 'image': 'https://fantalitystudios.ca/resources/assets/images/maps/reach/forgeworld.jpg'}
    }
};
const playerRanks = [
    {
        'name': '1',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/1.png'
    },
    {
        'name': '2',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/2.png'
    },
    {
        'name': '3',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/3.png'
    },
    {
        'name': '4',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/4.png'
    },
    {
        'name': '5',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/5.png'
    },
    {
        'name': '6',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/6.png'
    },
    {
        'name': '7',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/7.png'
    },
    {
        'name': '8',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/8.png'
    },
    {
        'name': '9',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/9.png'
    },
    {
        'name': '10',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/10.png'
    },
    {
        'name': '11',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/11.png'
    },
    {
        'name': '12',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/12.png'
    },
    {
        'name': '13',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/13.png'
    },
    {
        'name': '14',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/14.png'
    },
    {
        'name': '15',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/15.png'
    },
    {
        'name': '16',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/16.png'
    },
    {
        'name': '17',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/17.png'
    },
    {
        'name': '18',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/18.png'
    },
    {
        'name': '19',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/19.png'
    },
    {
        'name': '20',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/20.png'
    },
    {
        'name': '21',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/21.png'
    },
    {
        'name': '22',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/22.png'
    },
    {
        'name': '23',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/23.png'
    },
    {
        'name': '24',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/24.png'
    },
    {
        'name': '25',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/25.png'
    },
    {
        'name': '26',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/26.png'
    },
    {
        'name': '27',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/27.png'
    },
    {
        'name': '28',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/28.png'
    },
    {
        'name': '29',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/29.png'
    },
    {
        'name': '30',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/30.png'
    },
    {
        'name': '31',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/31.png'
    },
    {
        'name': '32',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/32.png'
    },
    {
        'name': '33',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/33.png'
    },
    {
        'name': '34',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/34.png'
    },
    {
        'name': '35',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/35.png'
    },
    {
        'name': '36',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/36.png'
    },
    {
        'name': '37',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/37.png'
    },
    {
        'name': '38',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/38.png'
    },
    {
        'name': '39',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/39.png'
    },
    {
        'name': '40',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/40.png'
    },
    {
        'name': '41',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/41.png'
    },
    {
        'name': '42',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/42.png'
    },
    {
        'name': '43',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/43.png'
    },
    {
        'name': '44',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/44.png'
    },
    {
        'name': '45',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/45.png'
    },
    {
        'name': '46',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/46.png'
    },
    {
        'name': '47',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/47.png'
    },
    {
        'name': '48',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/48.png'
    },
    {
        'name': '49',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/49.png'
    },
    {
        'name': '50',
        'image': 'https://www.fantalitystudios.ca/resources/assets/images/ranks/mcc/white/50.png'
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

async function getPlayerEmblem(gamertag) {
    return new Promise(async (emblem) => {
        try {
            await fetch(`https://www.mccstats.com/update-emblem/?gt=${gamertag}`)
                .then((resp) => resp.json())
                .then((data) => {
                    if (data['emblem'])
                        emblem(data['emblem'])
                    else
                        throw 'Could not retrieve player emblem';
                })
                .catch((error) => {
                    throw 'Could not retrieve player emblem';
                });
        } 
        catch (e) {
            emblem(null);
        }
    });

}
async function getPlayerRecentGames(gamertag) {
    return new Promise(async (stats, error) => {
        try {
            await fetch(`https://www.mccstats.com/player-matches/?gt=${gamertag}&game_variant=&req=6`)
                .then((resp) => resp.json())
                .then((data) => {
                    let matches = data['matches'] || [];
                    if (matches && matches.length <= 0)
                        throw 'The specified player has not played any games';
                    else {
                        var match = matches[0] || null;
                        if (match === null)
                            throw 'The specified player has not played any games';
                        else {
                            stats({
                                'assists': match['Assists'] || 0,
                                'date': match['Date'] || '',
                                'deaths': match['Deaths'] || 0,
                                'id': match['GameId'] || 0,
                                'type': getMapType(match['GameType'] || ''),
                                'headshots': match['Headshots'] || 0,
                                'ratio': match['KD'] || 0,
                                'kills': match['Kills'] || 0,
                                'map': getMap(match['MapId'] || 0),
                                'medals': match['Medals'] || 0,
                                'score': match['Score'] || 0,
                                'won': match['Won'] || false,
                            });
                        }
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


function getMapType(source) {
    return gameMapTypes[source] || 'Unknown';
};
function getMap(mapId) {
    return mapId in gameMapNames.reach ? gameMapNames.reach[mapId]
        : mapId in gameMapNames.h1 ? gameMapNames.h1[mapId]
        : mapId in gameMapNames.h2a ? gameMapNames.h2a[mapId]
        : mapId in gameMapNames.h2 ? gameMapNames.h2[mapId]
        : mapId in gameMapNames.h3 ? gameMapNames.h3[mapId]
        : mapId in gameMapNames.h4 ? gameMapNames.h4[mapId]
        : {
            'name': 'Unknown',
            'image': 'https://fantalitystudios.ca/resources/assets/images/maps/unknown.jpg'
        }
};
function getMapName(mapId) {
    return mapId in gameMapNames.reach ? gameMapNames.reach[mapId]['name'] + ' (Reach)'
        : mapId in gameMapNames.h1 ? gameMapNames.h1[mapId]['name'] + ' (H1)'
        : mapId in gameMapNames.h2a ? gameMapNames.h2a[mapId]['name'] + ' (H2A)'
        : mapId in gameMapNames.h2 ? gameMapNames.h2[mapId]['name'] + ' (H2C)'
        : mapId in gameMapNames.h3 ? gameMapNames.h3[mapId]['name'] + ' (H3)'
        : mapId in gameMapNames.h4 ? gameMapNames.h4[mapId]['name'] + ' (H4)'
        : 'Unknown'
};

module.exports = {

    timestamp: timestamp(),
    getChannelName: (client, channel) => getChannelName(client, channel),
    getPlaylistRank:(source) => getPlaylistRank(source),
    getPlaylistName: (source) => getPlaylistName(source),
    getPlaylistStats: (gamertag) => getPlaylistStats(gamertag),
    getPlayerEmblem: (gamertag) => getPlayerEmblem(gamertag),
    getPlayerRecentGames: (gamertag) => getPlayerRecentGames(gamertag),

    getMap: (id) => getMap(id),
    getMapType: (id) => getMapType(id),
    getMapName: (id) => getMapName(id),

};