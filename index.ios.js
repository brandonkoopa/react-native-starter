/**
* index.ios.js is the entry point for the iOS version of the app.
*/

var React = require('react-native');
var { AppRegistry } = React;

// Both index.ios.js & index.android.js load Main, so the two apps are basically idential.
var Main = require('./src/main');

AppRegistry.registerComponent('ReactNativeStarter', () => Main);
