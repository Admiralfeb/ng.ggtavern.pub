import { appKeys } from './keys';

/**
 * environment variables for staging environment
 */
export const environment = {
    production: false,
    version: '2020.1.1',
    firebase: {
        apiKey: appKeys.publicFirebase,
        authDomain: 'gg-tavern.firebaseapp.com',
        databaseURL: 'https://gg-tavern.firebaseio.com',
        projectId: 'gg-tavern',
        storageBucket: 'gg-tavern.appspot.com',
        messagingSenderId: '770177405846',
        appId: '1:770177405846:web:e3b9b6dcc4b1808be3c3b7'
    }
};
