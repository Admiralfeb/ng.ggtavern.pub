const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "**restricted**",
    authDomain: "gg-tavern.firebaseapp.com",
    projectId: "gg-tavern"
});

var db = firebase.firestore();

var menu = [
    {
        "short": "atari",
        "system": "Atari",
        "games": [
            {
                "name": "Defender",
                "players": ""
            },
            {
                "name": "Asteroids",
                "players": ""
            },
            {
                "name": "Starmaster",
                "players": ""
            },
            {
                "name": "Atlantis",
                "players": ""
            },
            {
                "name": "Seaquest",
                "players": ""
            },
            {
                "name": "Space Invaders",
                "players": ""
            },
            {
                "name": "Star Raiders",
                "players": ""
            },
            {
                "name": "Bugs",
                "players": ""
            },
            {
                "name": "M.A.S.H.",
                "players": ""
            },
            {
                "name": "Amidar",
                "players": ""
            },
            {
                "name": "Dig Dug",
                "players": ""
            },
            {
                "name": "Galaxian",
                "players": ""
            },
            {
                "name": "Blackjack",
                "players": ""
            },
            {
                "name": "14 Tele-Games",
                "players": ""
            },
            {
                "name": "Football",
                "players": ""
            },
            {
                "name": "Fun with Numbers",
                "players": ""
            },
            {
                "name": "Bowling",
                "players": ""
            },
            {
                "name": "Stellar Track",
                "players": ""
            },
            {
                "name": "Maze Craze",
                "players": ""
            },
            {
                "name": "Othello",
                "players": ""
            },
            {
                "name": "Super Breakout",
                "players": ""
            },
            {
                "name": "Sky Jinks",
                "players": ""
            },
            {
                "name": "Concentration",
                "players": ""
            },
            {
                "name": "Baseball",
                "players": ""
            },
            {
                "name": "Super Challenge Football",
                "players": ""
            },
            {
                "name": "Porky's",
                "players": ""
            },
            {
                "name": "Fantastic Voyage",
                "players": ""
            },
            {
                "name": "Crazy Climber",
                "players": ""
            },
            {
                "name": "Skiing",
                "players": ""
            },
            {
                "name": "Target Fun",
                "players": ""
            },
            {
                "name": "Missile Command",
                "players": ""
            },
            {
                "name": "River Raid",
                "players": ""
            },
            {
                "name": "Demons to Diamonds",
                "players": ""
            },
            {
                "name": "Circus Atari",
                "players": ""
            },
            {
                "name": "Barnstorming",
                "players": ""
            },
            {
                "name": "Super Breakout",
                "players": ""
            },
            {
                "name": "Haunted House",
                "players": ""
            },
            {
                "name": "Berzerk",
                "players": ""
            },
            {
                "name": "3-D Tic Tac Toe",
                "players": ""
            },
            {
                "name": "Casino",
                "players": ""
            },
            {
                "name": "Slot Racers",
                "players": ""
            },
            {
                "name": "Golf",
                "players": ""
            },
            {
                "name": "Backgammon",
                "players": ""
            },
            {
                "name": "Gunslinger",
                "players": ""
            },
            {
                "name": "Pong Sports",
                "players": ""
            },
            {
                "name": "Surround",
                "players": ""
            },
            {
                "name": "Pele's Soccer",
                "players": ""
            },
            {
                "name": "Ice Hockey",
                "players": ""
            },
            {
                "name": "Codebreaker",
                "players": ""
            },
            {
                "name": "Trick Shot",
                "players": ""
            },
            {
                "name": "Dark Cavern",
                "players": ""
            },
            {
                "name": "Fishing Derby",
                "players": ""
            },
            {
                "name": "Tron Deadly Disks",
                "players": ""
            },
            {
                "name": "Chopper Command",
                "players": ""
            },
            {
                "name": "Demon Attack",
                "players": ""
            },
            {
                "name": "Pac-Man",
                "players": ""
            },
            {
                "name": "Yars' Revenger",
                "players": ""
            },
            {
                "name": "London Blitz",
                "players": ""
            },
            {
                "name": "Combat",
                "players": ""
            },
            {
                "name": "Donkey Kong",
                "players": ""
            },
            {
                "name": "Vanguard",
                "players": ""
            },
            {
                "name": "Space Shuttle",
                "players": ""
            },
            {
                "name": "Hangman",
                "players": ""
            },
            {
                "name": "Star Ship",
                "players": ""
            },
            {
                "name": "Video Pinball",
                "players": ""
            },
            {
                "name": "E.T.",
                "players": ""
            },
            {
                "name": "Speedway II",
                "players": ""
            },
            {
                "name": "Defender",
                "players": ""
            },
            {
                "name": "Night Driver",
                "players": ""
            },
            {
                "name": "Space War",
                "players": ""
            },
            {
                "name": "Video Checkers",
                "players": ""
            },
            {
                "name": "Brain Games",
                "players": ""
            },
            {
                "name": "Basketball",
                "players": ""
            },
            {
                "name": "Dragster",
                "players": ""
            },
            {
                "name": "Super Challenge Baseball",
                "players": ""
            }
        ]
    },
    {
        "short": "arcade",
        "system": "Arcade",
        "games": [
            {
                "name": "Pac-Man/Pac-Man Plus",
                "players": 1
            },
            {
                "name": "Street Fighter 2 Multiple Editions",
                "players": "1-2"
            },
            {
                "name": "Galaga/Galaxian",
                "players": 1
            },
            {
                "name": "Asteroids/Major Havoc/Lunar Lander/Tempest",
                "players": 1
            },
            {
                "name": "Centipede/Missile Command/Crystal Castles/Millipede",
                "players": 1
            },
            {
                "name": "Rampage/Gauntlet/Joust/Defender",
                "players": 1
            }
        ]
    },
    {
        "short": "board",
        "system": "Board Games",
        "games": [
            {
                "name": "2 to 3 Headed Monster",
                "players": ""
            },
            {
                "name": "Axis & Allies",
                "players": "2-5"
            },
            {
                "name": "Balderdash",
                "players": "2-6"
            },
            {
                "name": "Beer Money",
                "players": ""
            },
            {
                "name": "Betrayal at House on the Hill",
                "players": "3-6"
            },
            {
                "name": "Bodger Mania",
                "players": "2-6"
            },
            {
                "name": "Buffy The Vampire Slayer",
                "players": "2-5"
            },
            {
                "name": "Minecraft The Card Game",
                "players": "2-4"
            },
            {
                "name": "Carcassonne",
                "players": "2-5"
            },
            {
                "name": "Cards against Humanity",
                "players": "4+"
            },
            {
                "name": "Castle Panic",
                "players": ""
            },
            {
                "name": "CDMC 3000",
                "players": ""
            },
            {
                "name": "Checkers",
                "players": 2
            },
            {
                "name": "Chess",
                "players": 2
            },
            {
                "name": "Codenames",
                "players": "2+"
            },
            {
                "name": "Connect 4",
                "players": 2
            },
            {
                "name": "Coup: Reformation",
                "players": "2-10"
            },
            {
                "name": "Dead of Winter",
                "players": ""
            },
            {
                "name": "Di Xit",
                "players": ""
            },
            {
                "name": "Dirty Minds",
                "players": ""
            },
            {
                "name": "Dungeon Scroll",
                "players": ""
            },
            {
                "name": "Epic Spell Wars Battle Wizards 1",
                "players": ""
            },
            {
                "name": "Epic Spell Wars Battle Wizards 2",
                "players": ""
            },
            {
                "name": "Exploding Kittens",
                "players": "2-5"
            },
            {
                "name": "Exploding Kittens NSFW",
                "players": "2-5"
            },
            {
                "name": "Fluxx",
                "players": "2-6"
            },
            {
                "name": "Fluxx: The Board Game",
                "players": ""
            },
            {
                "name": "Game of Thrones Board Game",
                "players": "3-6"
            },
            {
                "name": "Geek Battle",
                "players": ""
            },
            {
                "name": "Ghostbusters",
                "players": ""
            },
            {
                "name": "Gloom",
                "players": "2-5"
            },
            {
                "name": "Grave Business",
                "players": ""
            },
            {
                "name": "Greedy Greedy Goblins",
                "players": ""
            },
            {
                "name": "The Hunger Games: Training Days",
                "players": ""
            },
            {
                "name": "Jenga",
                "players": "2+"
            },
            {
                "name": "Joking Hazard",
                "players": "3-10"
            },
            {
                "name": "Jumanji",
                "players": "2-4"
            },
            {
                "name": "Kill Doctor Lucky",
                "players": "2-8"
            },
            {
                "name": "Killer Bunnies",
                "players": ""
            },
            {
                "name": "King of Tokyo",
                "players": "2-6"
            },
            {
                "name": "Catan",
                "players": "3-4"
            },
            {
                "name": "King of Tokyo Halloween",
                "players": ""
            },
            {
                "name": "Koryo Life",
                "players": ""
            },
            {
                "name": "Life: Star Wars",
                "players": ""
            },
            {
                "name": "Logo Board Game",
                "players": "2 Teams"
            },
            {
                "name": "Logo Party",
                "players": "2 Teams"
            },
            {
                "name": "Mad Gab",
                "players": ""
            },
            {
                "name": "Mankala",
                "players": 2
            },
            {
                "name": "Mansions of Madness",
                "players": "2-8"
            },
            {
                "name": "Mind Trap",
                "players": ""
            },
            {
                "name": "Monopoly: Legend of Zelda",
                "players": "3-6"
            },
            {
                "name": "Monopoly: Star Wars",
                "players": "3-6"
            },
            {
                "name": "Munchkin",
                "players": "2-6"
            },
            {
                "name": "Munchkin Legends",
                "players": "2-6"
            },
            {
                "name": "Munchkin Legends Guest Artists",
                "players": ""
            },
            {
                "name": "Munchkin Pathfinder",
                "players": "2-6"
            },
            {
                "name": "Munchkin Rick and Morty",
                "players": "2-6"
            },
            {
                "name": "Nosferatu",
                "players": ""
            },
            {
                "name": "Once Upon a Time",
                "players": ""
            },
            {
                "name": "One Deck Dungeon",
                "players": ""
            },
            {
                "name": "One Night Ultimate Werewolf",
                "players": "3-10"
            },
            {
                "name": "Pandemic",
                "players": "2-4"
            },
            {
                "name": "Phantom Society",
                "players": ""
            },
            {
                "name": "Phase 10",
                "players": ""
            },
            {
                "name": "Pink Godzilla Dev Kit",
                "players": "2-4"
            },
            {
                "name": "Pretending to Grownup",
                "players": ""
            },
            {
                "name": "Quelf",
                "players": "3-6"
            },
            {
                "name": "Qwirkle",
                "players": "2-4"
            },
            {
                "name": "Red Dragon In",
                "players": "2-6"
            },
            {
                "name": "The Resistance",
                "players": "5-10"
            },
            {
                "name": "Risk",
                "players": "3-5"
            },
            {
                "name": "Risk: Lord of the Rings",
                "players": ""
            },
            {
                "name": "Scattergories",
                "players": "2-6"
            },
            {
                "name": "Scrabble",
                "players": ""
            },
            {
                "name": "Scythe",
                "players": ""
            },
            {
                "name": "Smash Up",
                "players": "2-4"
            },
            {
                "name": "Sorry!",
                "players": ""
            },
            {
                "name": "Splendor",
                "players": "2-4"
            },
            {
                "name": "Superfight",
                "players": "2+"
            },
            {
                "name": "Three Cheers for Master",
                "players": "2-6"
            },
            {
                "name": "The Tick",
                "players": "2-4"
            },
            {
                "name": "Ticket to Ride",
                "players": "2-5"
            },
            {
                "name": "Ticket to Ride Europe",
                "players": "2-5"
            },
            {
                "name": "Town of Salem NSFW",
                "players": "2-5"
            },
            {
                "name": "Triple Yahtzee",
                "players": ""
            },
            {
                "name": "Trivia Box: Marvel Comics",
                "players": ""
            },
            {
                "name": "Tsuro Walking Dead",
                "players": "2-8"
            },
            {
                "name": "Walking Dead",
                "players": "1-4"
            },
            {
                "name": "What Do You Meme?",
                "players": "3+"
            },
            {
                "name": "Zombicide: Black Plague",
                "players": ""
            },
            {
                "name": "Zombies!!!",
                "players": "2-6"
            }
        ]
    },
    {
        "short": "gamecube",
        "system": "Gamecube",
        "games": [
            {
                "name": "Ant Bully",
                "players": 1
            },
            {
                "name": "Barnyard",
                "players": 1
            },
            {
                "name": "Billy Hatcher and the Giant Egg",
                "players": "1-2"
            },
            {
                "name": "Carmen Sandiego: The Secret of the Stolen Drums",
                "players": 1
            },
            {
                "name": "Final Fantasy Crystal Chronicles",
                "players": 1
            },
            {
                "name": "F-Zero GX",
                "players": "1-4"
            },
            {
                "name": "Magical Mirror starring Mickey Mouse",
                "players": 1
            },
            {
                "name": "Mario Kart Double DAsh",
                "players": "1-4"
            },
            {
                "name": "Mario Party 6",
                "players": "1-4"
            },
            {
                "name": "Paper Mario Thousand Year Door",
                "players": 1
            },
            {
                "name": "Robots",
                "players": 1
            },
            {
                "name": "Shrek Extra Large",
                "players": 1
            },
            {
                "name": "Shrek 2",
                "players": "1-4"
            },
            {
                "name": "Sonic Adventure DX",
                "players": 1
            },
            {
                "name": "Sonic Adventure 2",
                "players": "1-2"
            },
            {
                "name": "Spyro: Enter the Dragonfly",
                "players": 1
            },
            {
                "name": "Super Smash Bros Melee",
                "players": "1-4"
            },
            {
                "name": "Tony Hawk Pro Skater 3",
                "players": 1
            },
            {
                "name": "Legend of Zelda Wind Waker",
                "players": 1
            },
            {
                "name": "Legend of Zelda Ocarina of Time Master Quest",
                "players": 1
            }
        ]
    },
    {
        "short": "nintendo",
        "system": "Nintendo",
        "games": [
            {
                "name": "Double Dragon 2",
                "players": ""
            },
            {
                "name": "Rygar",
                "players": ""
            },
            {
                "name": "Baseball",
                "players": ""
            },
            {
                "name": "8 Eyes",
                "players": ""
            },
            {
                "name": "Road Blasters",
                "players": ""
            },
            {
                "name": "Section 2",
                "players": ""
            },
            {
                "name": "Crysalis",
                "players": ""
            },
            {
                "name": "Golf",
                "players": ""
            },
            {
                "name": "Goal Two",
                "players": ""
            },
            {
                "name": "Teenage Mutant Ninja Turtles",
                "players": ""
            },
            {
                "name": "Wrestle Mania",
                "players": ""
            },
            {
                "name": "Adventure Island",
                "players": ""
            },
            {
                "name": "Clash at Demonhead",
                "players": ""
            },
            {
                "name": "Megaman 2",
                "players": ""
            },
            {
                "name": "Super Mario 3",
                "players": ""
            },
            {
                "name": "Mario + Duck Hunt",
                "players": ""
            },
            {
                "name": "Rolling Thunder",
                "players": ""
            },
            {
                "name": "Bionic Commando",
                "players": ""
            },
            {
                "name": "Wizards and Warriors",
                "players": ""
            },
            {
                "name": "Donkey Kong 3",
                "players": ""
            },
            {
                "name": "Swords and Serpents",
                "players": ""
            },
            {
                "name": "Sesame Street 123",
                "players": ""
            },
            {
                "name": "Gyromite",
                "players": ""
            },
            {
                "name": "Faxquadu",
                "players": ""
            },
            {
                "name": "Top Gun",
                "players": ""
            },
            {
                "name": "Metal Gear",
                "players": ""
            },
            {
                "name": "Batman",
                "players": ""
            },
            {
                "name": "Blaster Master",
                "players": ""
            },
            {
                "name": "Alien Syndrome",
                "players": ""
            }
        ]
    },
    {
        "short": "snes",
        "system": "Super Nintendo",
        "games": [
            {
                "name": "Killer Instinct",
                "players": ""
            },
            {
                "name": "Aladdin",
                "players": ""
            }
        ]
    },
    {
        "short": "n64",
        "system": "Nintendo 64",
        "games": [
            {
                "name": "Banjo-Kazooie",
                "players": ""
            },
            {
                "name": "Cruis'n USA",
                "players": ""
            },
            {
                "name": "Diddy Kong Racing",
                "players": ""
            },
            {
                "name": "Donkey Kong 64",
                "players": ""
            },
            {
                "name": "GoldenEye 007",
                "players": ""
            },
            {
                "name": "Mario Golf",
                "players": ""
            },
            {
                "name": "Mario Kart 64",
                "players": ""
            },
            {
                "name": "Mario Party",
                "players": ""
            },
            {
                "name": "Namco Museum 64",
                "players": ""
            },
            {
                "name": "Paper Mario",
                "players": ""
            },
            {
                "name": "Pokemon Snap",
                "players": ""
            },
            {
                "name": "Pokemon Stadium",
                "players": ""
            },
            {
                "name": "Quake",
                "players": ""
            },
            {
                "name": "Rampage 2",
                "players": ""
            },
            {
                "name": "Ready 2 Rumble Boxing",
                "players": ""
            },
            {
                "name": "Star Wars Rogue Squadron",
                "players": ""
            },
            {
                "name": "Star Wars Shadows of the Empire",
                "players": ""
            },
            {
                "name": "Starfox 64",
                "players": ""
            },
            {
                "name": "Super Mario 64",
                "players": ""
            },
            {
                "name": "Super Smash Bros",
                "players": ""
            },
            {
                "name": "Turok 2",
                "players": ""
            },
            {
                "name": "Zelda Ocarina of Time",
                "players": ""
            }
        ]
    },
    {
        "short": "ps1",
        "system": "Playstation",
        "note": "While no games are listed for PS1, we do have them. Ask your bartender until this list is updated.",
        "games": []
    },
    {
        "short": "ps2",
        "system": "Playstation 2",
        "games": [
            {
                "name": "Ben 10 Alien Force",
                "players": "1-2"
            },
            {
                "name": "Crash Nitro Kart",
                "players": "1-4"
            },
            {
                "name": "Dino Stalker",
                "players": 1
            },
            {
                "name": "Guitar Hero 2",
                "players": "1-2"
            },
            {
                "name": "Guitar Hero 5",
                "players": "1-1"
            },
            {
                "name": "Guitar Hero Encore",
                "players": "1-2"
            },
            {
                "name": "Hitman 2: Silent Assassin",
                "players": 1
            },
            {
                "name": "Ice Age 2: The Meltdown",
                "players": 1
            },
            {
                "name": "King Kong",
                "players": 1
            },
            {
                "name": "Ironman",
                "players": 1
            },
            {
                "name": "Jurrasic: The Hunted",
                "players": 1
            },
            {
                "name": "LotR: The Two Towers",
                "players": 1
            },
            {
                "name": "Madagascar",
                "players": 1
            },
            {
                "name": "Medal of Honor Frontline",
                "players": 1
            },
            {
                "name": "Monsters, Inc.",
                "players": 1
            },
            {
                "name": "Monster House",
                "players": 1
            },
            {
                "name": "Mortal Kombat: Deception",
                "players": 2
            },
            {
                "name": "NBA Live 2003",
                "players": "1-2"
            },
            {
                "name": "RC Revenge Pro",
                "players": "1-2"
            },
            {
                "name": "Rock Band Country Track Pack",
                "players": "1-4"
            },
            {
                "name": "Sega Sports: Tennis",
                "players": "1-2"
            },
            {
                "name": "Star Wars Battlefront",
                "players": "1-4"
            },
            {
                "name": "Star Wars Battlefront 2",
                "players": "1-4"
            },
            {
                "name": "Star Wars: Force Unleashed",
                "players": 1
            },
            {
                "name": "Stuntman",
                "players": 1
            },
            {
                "name": "Terminator: Dawn of Fate",
                "players": 1
            },
            {
                "name": "Test Drive",
                "players": "1-2"
            },
            {
                "name": "Yu-gi-Oh GX: The Beginning of Destiny",
                "players": "1-2"
            }
        ]
    },
    {
        "short": "ps3",
        "system": "Playstation 3",
        "games": [
            {
                "name": "Aquapazza Aquaplus Dream Match",
                "players": 1
            },
            {
                "name": "Call of Duty: Black Ops",
                "players": "1-2"
            },
            {
                "name": "Call of Duty: Black Ops 2",
                "players": "1-2"
            },
            {
                "name": "Dead Island: riptide",
                "players": 1
            },
            {
                "name": "FIFA Soccer 10",
                "players": "1-2"
            },
            {
                "name": "FIFA Soccer 13",
                "players": "1-2"
            },
            {
                "name": "Fighting Climax",
                "players": 1
            },
            {
                "name": "Killzone 2",
                "players": 1
            },
            {
                "name": "Killzone 3",
                "players": "1-2"
            },
            {
                "name": "Little Big Planet",
                "players": "1-4"
            },
            {
                "name": "Madden 2004",
                "players": "1-6"
            },
            {
                "name": "Mercenaries 2",
                "players": 1
            },
            {
                "name": "Motorsports Adrenaline",
                "players": 1
            },
            {
                "name": "Need for Speed: Hot Pursuit",
                "players": 1
            },
            {
                "name": "Pro Evolution Soccer 13",
                "players": "1-2"
            },
            {
                "name": "Ratchet & Clank Future: A Crack in Time",
                "players": 1
            },
            {
                "name": "SEGA Superstars Tennis",
                "players": "1-4"
            },
            {
                "name": "Sports Champions",
                "players": "1-2"
            },
            {
                "name": "Sports Champions 2",
                "players": "1-2"
            },
            {
                "name": "The Last of Us",
                "players": 1
            },
            {
                "name": "Uncharted: Drake's Fortune",
                "players": 1
            },
            {
                "name": "Uncharted 2: Among Thieves",
                "players": "1-2"
            },
            {
                "name": "Uncharted 3: Drake's Deception",
                "players": "1-2"
            },
            {
                "name": "Under Night In-Birth",
                "players": "1-2"
            }
        ]
    },
    {
        "short": "ps4",
        "system": "Playstation 4",
        "games": [
            {
                "name": "Assassin's Creed Origins",
                "players": 1
            },
            {
                "name": "Call of Duty: Advanced Warfare",
                "players": "1-2"
            },
            {
                "name": "Call of Duty: Black Ops 2",
                "players": "1-2"
            },
            {
                "name": "Call of Duty: Infinite Warfare",
                "players": "1-2"
            },
            {
                "name": "Call of Duty: WW2",
                "players": "1-2"
            },
            {
                "name": "Dark Souls Remastered",
                "players": 1
            },
            {
                "name": "Dark Souls 3: The Fire Fades Edition",
                "players": 1
            },
            {
                "name": "Destiny",
                "players": 1
            },
            {
                "name": "FIFA 2015",
                "players": "1-2"
            },
            {
                "name": "Mass Effect: Andromeda",
                "players": 1
            },
            {
                "name": "Madden 2017",
                "players": "1-4"
            },
            {
                "name": "MLB 14",
                "players": "1-4"
            },
            {
                "name": "Overwatch",
                "players": 1
            },
            {
                "name": "Star Wars Battlefront",
                "players": 1
            },
            {
                "name": "The Last of Us Remastered",
                "players": 1
            }
        ]
    },
    {
        "short": "vr",
        "system": "Virtual Reality",
        "games": [
            {
                "name": "Don't Knock Twice",
                "players": ""
            },
            {
                "name": "ARTAAL",
                "players": ""
            },
            {
                "name": "Lost",
                "players": ""
            },
            {
                "name": "Superhot",
                "players": ""
            },
            {
                "name": "Gorn",
                "players": ""
            },
            {
                "name": "Mission ISS",
                "players": ""
            },
            {
                "name": "Robo Recall",
                "players": ""
            },
            {
                "name": "MineCraft",
                "players": ""
            },
            {
                "name": "Immersive Combat",
                "players": ""
            },
            {
                "name": "Beat Saber",
                "players": ""
            }
        ]
    },
    {
        "short": "wii",
        "system": "Wii",
        "games": [
            {
                "name": "America's Next Top Model",
                "players": 1
            },
            {
                "name": "Animal Crossing: City Folk",
                "players": 1
            },
            {
                "name": "Cooking Mama",
                "players": 1
            },
            {
                "name": "Deepak Chopra's Leela",
                "players": 1
            },
            {
                "name": "Dragonball Z Budokai Tenkaichi 3",
                "players": "1-2"
            },
            {
                "name": "Endless Ocean",
                "players": 1
            },
            {
                "name": "Hollywood Squares",
                "players": 1
            },
            {
                "name": "Madden 2008",
                "players": "1-2"
            },
            {
                "name": "Mario Party 8",
                "players": "1-4"
            },
            {
                "name": "Metroid: Other M",
                "players": 1
            },
            {
                "name": "Metroid Prime: Trilogy",
                "players": 1
            },
            {
                "name": "NiGHTS: Journey of Dreams",
                "players": "1-2"
            },
            {
                "name": "Okami",
                "players": 1
            },
            {
                "name": "Pac-man Party",
                "players": "1-4"
            },
            {
                "name": "Pikmin",
                "players": 1
            },
            {
                "name": "Pikmin 2",
                "players": "1-2"
            },
            {
                "name": "Pokepark 2: Wonders Beyond",
                "players": "1-4"
            },
            {
                "name": "Sonic Colors",
                "players": "1-2"
            },
            {
                "name": "Sonic and Secret Rings",
                "players": "1-4"
            },
            {
                "name": "Sonic Unleashed",
                "players": 1
            },
            {
                "name": "Spore Hero",
                "players": "1-2"
            },
            {
                "name": "Super Mario Galaxy",
                "players": "1 w/ helper"
            },
            {
                "name": "Super Mario Galaxy 2",
                "players": "1 w/ helper"
            },
            {
                "name": "Super Monkey Ball: Banana Blitz",
                "players": "1-4"
            },
            {
                "name": "Super Smash Bros Brawl",
                "players": "1-4"
            },
            {
                "name": "Ultimate I Spy",
                "players": "1-2"
            },
            {
                "name": "Wii Party",
                "players": "1-2"
            },
            {
                "name": "Wii Sports",
                "players": "1-4"
            },
            {
                "name": "Legend of Zelda: Skyward Sword",
                "players": 1
            }
        ]
    },
    {
        "short": "wiiu",
        "system": "Wii U",
        "games": [
            {
                "name": "Batman Arkham City Armored Edition",
                "players": 1
            },
            {
                "name": "Bayonetta 2",
                "players": 1
            },
            {
                "name": "Darksiders 2",
                "players": 1
            },
            {
                "name": "Hyrule Warriors",
                "players": "1-2"
            },
            {
                "name": "Mario Kart 8",
                "players": "1-4"
            },
            {
                "name": "Mario Party 10",
                "players": "1-5"
            },
            {
                "name": "Monster Hunters 3",
                "players": 1
            },
            {
                "name": "Nintendo Land",
                "players": "1-5"
            },
            {
                "name": "Pikman 3",
                "players": "1-2"
            },
            {
                "name": "Super Mario 3D World",
                "players": "1-4"
            },
            {
                "name": "Super Mario Bros U",
                "players": "1-4"
            },
            {
                "name": "Super Smash Bros Wii U",
                "players": "1-8"
            },
            {
                "name": "Pokken Tournament",
                "players": "1-2"
            },
            {
                "name": "Xenoblade Chronicles X",
                "players": 1
            },
            {
                "name": "Yoshi's Wolly World",
                "players": "1-2"
            },
            {
                "name": "Legend of Zelda: Twilight Princess",
                "players": 1
            },
            {
                "name": "Legend of Zelda: Wind Waker HD",
                "players": 1
            },
            {
                "name": "ZombiU",
                "players": "1-2"
            }
        ]
    },
    {
        "short": "xb",
        "system": "Xbox",
        "note": "We only have one Xbox controller for this system.",
        "games": [
            {
                "name": "Atari Anthrology",
                "players": "1-2"
            },
            {
                "name": "Crash TwinSanity",
                "players": 1
            },
            {
                "name": "Crash Bandicoot: Wrath of Cortex",
                "players": 1
            },
            {
                "name": "ESPN",
                "players": 1
            },
            {
                "name": "Halo",
                "players": "1-4"
            },
            {
                "name": "Halo 2",
                "players": "1-4"
            },
            {
                "name": "Kung Fu Chaos",
                "players": "1-2"
            },
            {
                "name": "NFL 2003",
                "players": "1-2"
            },
            {
                "name": "Pac-Man World",
                "players": 1
            },
            {
                "name": "Shrek Super Party",
                "players": "1-4"
            },
            {
                "name": "Shrek Super Slam",
                "players": "1-4"
            },
            {
                "name": "Star Wars Battlefront",
                "players": "1-4"
            },
            {
                "name": "Star Wars Legos",
                "players": "1-2"
            },
            {
                "name": "Star Wars Legos 2",
                "players": "1-2"
            }
        ]
    },
    {
        "short": "xb360",
        "system": "Xbox 360",
        "games": [
            {
                "name": "Assassin's Creed 3",
                "players": 1
            },
            {
                "name": "Battlefield 3",
                "players": 1
            },
            {
                "name": "Bulletstorm",
                "players": 1
            },
            {
                "name": "Call of Duty: Black Ops",
                "players": "1-2"
            },
            {
                "name": "Call of Duty: Black Ops 2",
                "players": "1-2"
            },
            {
                "name": "Call of Duty: Modern Warfare",
                "players": "1-4"
            },
            {
                "name": "Dark Souls 2",
                "players": 1
            },
            {
                "name": "Fallout 3",
                "players": 1
            },
            {
                "name": "Gears of War",
                "players": "1-2"
            },
            {
                "name": "Gears of War 2",
                "players": "1-2"
            },
            {
                "name": "Gears of War 3",
                "players": "1-2"
            },
            {
                "name": "Gears of War: Judgement",
                "players": "1-2"
            },
            {
                "name": "Genesis Collection",
                "players": "1-2 on some"
            },
            {
                "name": "Guitar Hero 5",
                "players": "1-2"
            },
            {
                "name": "Halo",
                "players": "1-4"
            },
            {
                "name": "Halo 3",
                "players": "1-4"
            },
            {
                "name": "Halo 4",
                "players": "1-4"
            },
            {
                "name": "Infinite Undiscovery",
                "players": 1
            },
            {
                "name": "Left 4 Dead",
                "players": "1-2"
            },
            {
                "name": "Left 4 Dead 2",
                "players": "1-2"
            },
            {
                "name": "Lego Marvel Superheroes",
                "players": "1-2"
            },
            {
                "name": "Magna Carta 2",
                "players": 1
            },
            {
                "name": "Mercenaries 2",
                "players": 1
            },
            {
                "name": "Mirrors Edge",
                "players": 1
            },
            {
                "name": "Portal 2",
                "players": "1-2"
            },
            {
                "name": "The Orange Box",
                "players": 1
            },
            {
                "name": "Timeshift",
                "players": 1
            },
            {
                "name": "Too Human",
                "players": 1
            }
        ]
    },
    {
        "short": "xb1",
        "system": "Xbox One",
        "games": [
            {
                "name": "Assassin's Creed 4: Black Flag",
                "players": 1
            },
            {
                "name": "Assassin's Creed 5: Unity",
                "players": "1-4"
            },
            {
                "name": "Destiny 2",
                "players": "1-2"
            },
            {
                "name": "Farcry 4",
                "players": 1
            },
            {
                "name": "Farcry 5",
                "players": 1
            },
            {
                "name": "Halo 5",
                "players": 1
            },
            {
                "name": "Mortal Kombat XL",
                "players": "1-2"
            },
            {
                "name": "Resident Evil 5",
                "players": "1-2"
            },
            {
                "name": "Rainbow Six: Siege",
                "players": "1-2 Local Coop"
            },
            {
                "name": "Star Wars Battlefront",
                "players": "1-2"
            },
            {
                "name": "Shado of War",
                "players": 1
            },
            {
                "name": "Styx: Shards of Darkness",
                "players": 1
            },
            {
                "name": "Watch Dogs",
                "players": 1
            }
        ]
    }
]

menu.forEach(function (system) {
    const systemName = system.system;
    const short = system.short;
    const games = system.games;

    db.collection(`games`).doc(short).set({
        system: systemName,
        short: short
    }).then(_ => {
        console.log("Document written with ID: ", short);
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });

    games.forEach((game) => {
        db.collection(`games/${short}/games`).add({
            game: game.name,
            players: game.players
        }).then(docref2 => console.log("Document written with ID: ", docref2.id)).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    })
});