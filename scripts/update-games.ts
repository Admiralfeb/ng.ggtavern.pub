import { Game, GameSystem } from './models/gamemodels';

const dotenv = require('dotenv');
dotenv.config();

import * as firebase from 'firebase/app';
require('firebase/firestore');


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: process.env.FIREBASEDEVKEY,
    authDomain: 'gg-tavern.firebaseapp.com',
    projectId: 'gg-tavern'
});

const db = firebase.firestore();

getItemsandSingleSub<GameSystem, Game>('games', 'games').then(systems => {
    systems.forEach(system => {
        const systemName = system.system;
        const short = system.short;
        const games = system.games;
        const note = system.note ? system.note : '';
        db.collection('games').doc(short)
            .set({ system: systemName, short, note, games })
            .then(_ => console.log('Document written with ID:', short))
            .catch(err => console.error('Error adding document:', err));
    });
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

async function getItemsandSingleSub<T, S>(queryPath: string, subPath: string): Promise<T[]> {
    let items: T[] = [];
    try {
        const collection = await db.collection(queryPath).get();
        if (!collection.empty) {
            for (const item of collection.docs) {
                const data = item.data() as T;

                let subItems: S[] = [];
                const subCollection = await item.ref.collection(subPath).get();
                if (!subCollection.empty) {
                    for (const subItem of subCollection.docs) {
                        const subData = subItem.data() as S;
                        subItems = [...subItems, subData];
                    }
                    data[subPath] = subItems;
                }

                items = [...items, data];
            }
        }
        return items;
    } catch (err) {
        throw err;
    }
}
