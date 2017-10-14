# A simple Github User Profile like app built with [Create React App](https://github.com/facebookincubator/create-react-app), [React Redux](https://github.com/reactjs/react-redux), [Redux Thunk](https://github.com/gaearon/redux-thunk)

## Stack

- Create React App
- React (with JSX)
- React Redux
- React Router
- Redux Thunk
- Redux Devtools Extension for Chrome
- Jest, Enzyme for Unit Test


## Quick Start

```shell
$ git clone https://github.com/kishankanugula/github-profile-react.git
$ cd github-profile-react
$ npm install
$ npm start
```

## Explanation
Set the Github Username from "User" tab, and the state will be stored in HTML5 sessionStorage. Repositories & Gists data
are fetched based on the username stored in sessionStorage. You can change the Username in "User" tab which will store the
Username in sessionStorage.

## NPM Commands

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Build the application to `./build` directory|
|`npm test`|Test the application; watch for changes and retest|