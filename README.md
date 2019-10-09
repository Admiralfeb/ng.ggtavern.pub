# Ggtavern

This project is a labor of love for the Grinning Goblin Gaming Tavern. One of the best nerd bars in the Wichita, Kansas area.

[![Build Status](https://travis-ci.com/Admiralfeb/ggtavern.pub.svg?branch=develop)](https://travis-ci.com/Admiralfeb/ggtavern.pub)
[![codecov](https://codecov.io/gh/Admiralfeb/ggtavern.pub/branch/develop/graph/badge.svg)](https://codecov.io/gh/Admiralfeb/ggtavern.pub)
[![CodeFactor](https://www.codefactor.io/repository/github/admiralfeb/ggtavern.pub/badge)](https://www.codefactor.io/repository/github/admiralfeb/ggtavern.pub)

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
