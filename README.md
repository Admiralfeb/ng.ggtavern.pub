# GGTavern.pub - Grinning Goblin Gaming Tavern Website

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/gg-tavern.appspot.com/o/public%2Fimg%2Fandroid-chrome-192x192.png?alt=media&token=60f098fd-6b0e-4131-b229-29667d1fb6d2" alt="GGTavern Logo"/>
</p>

This project is a labor of love for the Grinning Goblin Gaming Tavern. One of the best nerd bars in the Wichita, Kansas area.

The current production version of this site is hosted at https://ggtavern.admiralfeb.net. If the goblins permit, it will switch to http://ggtavern.pub once complete.

![GitHub](https://github.com/Admiralfeb/ggtavern.pub/workflows/Test%20and%20Build/badge.svg)
[![codecov](https://codecov.io/gh/Admiralfeb/ggtavern.pub/branch/develop/graph/badge.svg)](https://codecov.io/gh/Admiralfeb/ggtavern.pub)
[![CodeFactor](https://www.codefactor.io/repository/github/admiralfeb/ggtavern.pub/badge)](https://www.codefactor.io/repository/github/admiralfeb/ggtavern.pub)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Admiralfeb/ggtavern.pub.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Admiralfeb/ggtavern.pub/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Admiralfeb/ggtavern.pub.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Admiralfeb/ggtavern.pub/context:javascript)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAdmiralfeb%2Fggtavern.pub.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAdmiralfeb%2Fggtavern.pub?ref=badge_shield)

## Install

This project uses NodeJS and Angular v8. `npm install` will allow you to install the project. Required API keys will also be loaded postinstall. See **API Keys** for more information.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## API Keys

This project uses Google Firebase Firestore and has an API key. The key is not available for use outside contributors. After install of the project a `keys.ts` file will be generated in `src/environments`. This will allow building, but will not permit access to the database.

A `.env` file can be placed in the root of the project to simulate API keys. See `scripts/generateKeyFile.ts` for the keynames.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAdmiralfeb%2Fggtavern.pub.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FAdmiralfeb%2Fggtavern.pub?ref=badge_large)
