import { Game, GameSystem } from './models/gamemodels';

const dotenv = require('dotenv');
dotenv.config();

const firebase = require('firebase/app');
require('firebase/firestore');


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: process.env.FIREBASEDEVKEY,
    authDomain: 'gg-tavern.firebaseapp.com',
    projectId: 'gg-tavern'
});

const db = firebase.firestore();

const menu: GameSystem[] = [
    {
        short: 'gamecube',
        system: 'Gamecube',
        games: [
            {
                name: 'Amazing Island'
            },
            {
                name: 'Ant Bully'
            },
            {
                name: 'Barnyard'
            },
            {
                name: 'Billy Hatcher and the Giant Egg'
            },
            {
                name: 'Carmen Sandiego: The Secret of the Stolen Drums'
            },
            {
                name: 'Dragonball Z Sagas'
            },
            {
                name: 'F-Zero GX'
            },
            {
                name: 'Final Fantasy Crystal Chronicles'
            },
            {
                name: 'Kids Next Door Operation V.I.D.E.O.G.A.M.E.'
            },
            {
                name: 'Legend of Zelda Ocarina of Time Master Quest'
            },
            {
                name: 'Legend of Zelda Wind Waker'
            },
            {
                name: 'Magical Mirror starring Mickey Mouse'
            },
            {
                name: 'Mario Kart Double DAsh'
            },
            {
                name: 'Mario Party 6'
            },
            {
                name: 'Mario Superstar Baseball'
            },
            {
                name: 'Paper Mario Thousand Year Door'
            },
            {
                name: 'Nicktoons Unite'
            },
            {
                name: 'Robots'
            },
            {
                name: 'Shrek 2'
            },
            {
                name: 'Shrek Extra Large'
            },
            {
                name: 'Sonic Adventure 2'
            },
            {
                name: 'Sonic Adventure DX'
            },
            {
                name: 'Spyro: Enter the Dragonfly'
            },
            {
                name: 'Super Smash Bros Melee'
            },
            {
                name: 'Tak and the Power of Juju'
            },
            {
                name: 'Tony Hawk Pro Skater 3'
            },
            {
                name: 'Tom and Jerry War of the Whiskers'
            },
            {
                name: 'Wario Ware Inc'
            },
            {
                name: 'Worms Blast'
            }
        ]
    }
];

menu.forEach(system => {
    const systemName = system.system;
    const short = system.short;
    const games = system.games;
    const note = system.note ? system.note : '';

    // uploadSystem(short, systemName, note);

    uploadGame(games, short);
});

function uploadSystem(short: string, systemName: string, note: string) {
    db.collection(`games`).doc(short).set({
        system: systemName,
        short,
        note
    }).then(_ => {
        console.log('Document written with ID: ', short);
    }).catch(error => {
        console.error('Error adding document: ', error);
    });
}

function uploadGame(games: Game[], short: string) {
    games.forEach(game => {
        db.collection(`games/${short}/games`).add({
            name: game.name,
            players: game.players ? game.players : ''
        }).then(docref2 => console.log('Document written with ID: ', docref2.id)).catch(error => {
            console.error('Error adding document: ', error);
        });
    });
}
