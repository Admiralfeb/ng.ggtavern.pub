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

const menu = [
    {
        name: 'Abita Purple Haze',
        ABV: '4.2%',
        price: '4.00'
    },
    {
        name: 'Ballast Point Sour Wench',
        ABV: '7.0%',
        price: '6.25'
    },
    {
        name: 'Boulevard Wheat',
        ABV: '4.4%',
        price: '4.25'
    },
    {
        name: 'Bud Light',
        ABV: '4.2%',
        price: '3.75'
    },
    {
        name: 'Budweiser',
        ABV: '5.0%',
        price: '3.75'
    },
    {
        name: 'Corona',
        ABV: '4.5%',
        price: '4.00'
    },
    {
        name: 'Dragon\'s Milk',
        ABV: '11.0%',
        price: '8.00'
    },
    {
        name: 'Founders All Day IPA',
        ABV: '4.7%',
        price: '4.00'
    },
    {
        name: 'Founders Breakfast Stout',
        ABV: '8.3%',
        price: '6.25'
    },
    {
        name: 'Free State Yakimaniac',
        ABV: '7.5%',
        price: '5.00'
    },
    {
        name: 'Guinness',
        ABV: '5.0%',
        price: '4.75'
    },
    {
        name: 'Leinenkugel\'s Summer Shandy',
        ABV: '4.2%',
        price: '4.75'
    },
    {
        name: 'Miller Lite',
        ABV: '4.2%',
        price: '3.75'
    },
    {
        name: 'New Grist Gluten Free Pilsner',
        ABV: '5.1%',
        price: '7.00'
    },
    {
        name: 'Not Your Father\'s Root Beer',
        ABV: '5.9%',
        price: '5.50'
    },
    {
        name: 'Paulaner Hefweizen',
        ABV: '5.0%',
        price: '4.75'
    },
    {
        name: 'Pseudo Sue Pale Ale',
        ABV: '6.8%',
        price: '8.75'
    },
    {
        name: 'Rekorderlig Strawberry-Lime Cider',
        ABV: '4.5%',
        price: '7.00'
    },
    {
        name: 'Rekorderlig Wild Berry Cider',
        ABV: '4.5%',
        price: '7.00'
    },
    {
        name: 'Rogue Dead Guy Ale',
        ABV: '6.8%',
        price: '5.25'
    },
    {
        name: 'Strongbow Original Dry',
        ABV: '5.0%',
        price: '5.00'
    },
    {
        name: 'Tank 7',
        ABV: '8.5%',
        price: '7.00'
    },
    {
        name: 'The Copper Can',
        ABV: '10.0%',
        price: '8.50'
    },
    {
        name: 'Walnut River coffee Porter',
        ABV: '6.6%',
        price: '5.00'
    },
    {
        name: 'Warsteiner Dunkel',
        ABV: '4.8%',
        price: '4.25'
    },
    {
        name: 'WBC WuShock Wheat',
        ABV: '4.5%',
        price: '4.25'
    }
];

menu.forEach(obj => {
    db.collection('menus/food-and-drink/bottles')
        .add({
            name: obj.name,
            ABV: obj.ABV,
            price: obj.price
        })
        .then(docRef => {
            console.log('Document written with ID: ', docRef.id);
        })
        .catch(error => {
            console.error('Error adding document: ', error);
        });
});
