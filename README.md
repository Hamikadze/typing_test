# Getting Started

The deployment is located at: [Typing test](https://hamikadze.github.io/typing_test/)

This project uses:
* npm / yarn (Both work at the moment, but it is better to use *yarn*)
* React
* MobX
  * mobx-react-lite
* gh-pages

## First things first after cloning a repository

Run in the project folder `npm install` or `yarn install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

To use it, you need to replace
`"homepage": "http://Hamikadze.github.io/typing_test"` with
`"homepage": "."` in *package.json*

### `npm run deploy`

Creates a build that assumes your app will be hosted at the root of the server.

To use it, you need to replace
`"homepage": "http://Hamikadze.github.io/typing_test"` with
`"homepage": "http://{username}.github.io/{repo-name}"` in *package.json*