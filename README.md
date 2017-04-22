
## React Native Authentication + CodePush + Sails Backend  


### Boilerplate starter kit for [React Native](https://facebook.github.io/react-native/docs/getting-started.html)  + [Redux](http://redux.js.org) + [CodePush](https://github.com/Microsoft/react-native-code-push) Apps (iOS & Android) + [Sails](http://sailsjs.com/)


This is a sample boilerplate react-native mobile applicatio that demonstrates authentication using a simplified version of OAuth2, with a long-live refresh token and short-live access token


## Technologies
Technologies used in boilerplate application*

* [React Native](https://github.com/facebook/react-native)
* [Sails](http://sailsjs.com/)
* [NativeBase](http://nativebase.io/)
* [Redux](http://redux.js.org)
* [CodePush](https://github.com/Microsoft/react-native-code-push)
* [React Native Router Flux](https://github.com/aksonov/react-native-router-flux)


## Client Installation

If you don't have React-Native installed on your computer, run the following:
```
$ npm install -g react-native-cli
```

On the command prompt run the following commands
```
$ git clone https://github.com/mshameer/React-Native-Authentication-CodePush-Sails.git
// Go in the `client` directory, then run the following:
$ npm install

$ react-native link
```
[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation and key deployment.

## Server Installation


If you don't have SailsJS installed on your computer, run the following:
```
npm install -g sails
```

Go in the `server` directory, then run the following:
```
npm install
```

## Run Server

Run the following in the terminal:

```
sails lift
```

This will create a server listening on port 3000, you can access it from http://localhost:1337/. The server needs to run at all time when you use the client.

## Run iOS

Run the following command in your terminal

```
$ react-native run-ios
```

## Run Android

Run the following command in your terminal

```
$ react-native start
$ react-native run-android
```
