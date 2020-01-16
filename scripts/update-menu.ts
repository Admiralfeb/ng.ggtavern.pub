const dotenv = require('dotenv');
dotenv.config();

const admin = require('firebase-admin');

let serviceAccount = require(process.env.FIREBASEJSONKEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

const newRef = db.collection('menu');

db.collection('menus').doc('food-and-drink').listCollections().then(collections => {
    collections.forEach(collection => {
        console.log('Processing Collection', collection.id);
        let oldDocs = [];
        collection.get().then(snapshot => {
            // console.log(snapshot.docs);
            for (const item of snapshot.docs) {
                const data = item.data();
                oldDocs = [...oldDocs, data];
            }
            let newObj = { section: collection.id, items: oldDocs };
            newRef.add(newObj).then(success => {
                console.log('Successfully wrote', collection.id, 'to', success.id);
            });
        });
    });
});

    // db.collection('menu').add({ test: 'success' }).then(ref => {
    //     console.log('Successfully added document', ref.id);
    // });
