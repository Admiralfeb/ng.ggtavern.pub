import { Position, Worker } from './models/about.models';

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

const positions: Position[] = [
    {
        id: 'owners',
        name: 'Owner Goblins',
        order: 0,
        workers: [
            {
                name: 'Jen and Pat',
                quote: 'Marshmallows have no bones',
                info: '',
                imgPath: ''
            }
        ]
    },
    {
        id: 'barstaff',
        name: 'Bar Faeries',
        order: 1,
        workers: [
            {
                name: 'Diana',
                quote: '',
                info: '',
                imgPath: ''
            },
            {
                name: 'Kaitie',
                quote: '',
                info: '',
                imgPath: ''
            }
        ]
    },
    {
        id: 'kitchen',
        name: 'Kitchen Dragons',
        order: 2,
        workers: [
            {
                name: 'Amarah',
                quote: '',
                info: '',
                imgPath: ''
            },
            {
                name: 'Anthony',
                quote: '',
                info: '',
                imgPath: ''
            },
            {
                name: 'Jane',
                quote: '',
                info: '',
                imgPath: ''
            }
        ]
    },
    {
        id: 'DMs',
        name: 'Masters of Dungeons',
        order: 3,
        workers: [
            {
                name: 'Jeff',
                quote: '',
                info: '',
                imgPath: ''
            },
            {
                name: 'Daniel',
                quote: '',
                info: '',
                imgPath: ''
            }
        ]
    }
];

positions.forEach(position => {
    uploadPosition(position.id, position.name, position.order);
    uploadWorker(position.workers, position.id);
});

function uploadPosition(id: string, name: string, order: number) {
    db.collection(`positions`).doc(id)
        .set({ name, order })
        .then(_ => {
            console.log('Document written with ID: ', id);
        })
        .catch(error => {
            console.error('Error adding document: ', error);
        });
}

function uploadWorker(workers: Worker[], id: string) {
    workers.forEach(worker => {
        db.collection(`positions/${id}/workers`)
            .add({
                name: worker.name,
                quote: worker.quote,
                info: worker.info,
                imgPath: worker.imgPath
            })
            .then(docref2 => console.log('Document written with ID: ', docref2.id))
            .catch(error => {
                console.error('Error adding document: ', error);
            });
    });
}
