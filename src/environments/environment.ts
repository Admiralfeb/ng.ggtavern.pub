import { appKeys } from './keys';

/**
 * environment variables for dev environment
 */
export const environment = {
  production: false,
  version: '2020.1.1',
  firebase: {
    apiKey: appKeys.devFirebase,
    authDomain: 'gg-tavern.firebaseapp.com',
    databaseURL: 'https://gg-tavern.firebaseio.com',
    projectId: 'gg-tavern',
    storageBucket: 'gg-tavern.appspot.com',
    messagingSenderId: '770177405846',
    appId: '1:770177405846:web:e3b9b6dcc4b1808be3c3b7'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
