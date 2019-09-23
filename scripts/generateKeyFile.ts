const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, '../src/environments/keys.ts');

if (fs.existsSync(path.join(__dirname, '../.env'))) {
    const dotenv = require('dotenv');
    dotenv.config();
}

const fbpublic = {
    name: 'publicFirebase', value: process.env.FIREBASEPUBLICKEY
};
const fbdev = { name: 'devFirebase', value: process.env.FIREBASEDEVKEY };

const fileString = `export const appKeys = {
    ${fbpublic.name}: '${fbpublic.value}',
    ${fbdev.name}: '${fbdev.value}'
};
`;

fs.writeFileSync(fileName, fileString);
