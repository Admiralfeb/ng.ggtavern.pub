// This file generates a `keys.ts` file for Angular to use
// The current keys used are:
/* FIREBASEPUBLICKEY - the public key that shows in the production build files.
    This key is limited to the production scope as it can be seen in the build product.
    It only works on specific domains.
   FIREBASEDEVKEY - This key is guarded as it has no limits.
    You must be approved by Admiralfeb to have this key.
*/
// If a key cannot be found, the generated file will have 'undefined' as the key value.

const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, '../src/environments/keys.ts');

// Use .env if present in the root directory.
if (fs.existsSync(path.join(__dirname, '../.env'))) {
    const dotenv = require('dotenv');
    dotenv.config();
}

const fbpublic = { name: 'publicFirebase', value: process.env.FIREBASEPUBLICKEY };
const fbdev = { name: 'devFirebase', value: process.env.FIREBASEDEVKEY };

// contents of the `keys.ts` file
const fileString = `export const appKeys = {
    ${fbpublic.name}: '${fbpublic.value}',
    ${fbdev.name}: '${fbdev.value}'
};
`;

fs.writeFileSync(fileName, fileString);
