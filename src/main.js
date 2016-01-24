/**
* Main has basically one job, and that is to contain the Nativator that displays the various scenes.
*/

import React from 'react-native';

// Tmport the React Components used as scenes for the Navigator.
import SignIn from './scenes/signin';
import SignUp from './scenes/signup';
import Home from './scenes/home';

// Variables to use React's Navigator and StyleSheet for styling.
var {
  Navigator,
  StyleSheet
} = React;

// ROUTES makes it easy to render a scene by name.
var ROUTES = {
    signin: SignIn,
    signup: SignUp,
    home: Home
};

module.exports = React.createClass({
    renderScene: function (route, navigator) {
        var Component = ROUTES[route.name]; // example: ROUTES['signin'] =? SignIn
        return <Component route={route} navigator={navigator}/>;
    },
    render: function () {
        return (
            /* ================================== View ======================================== */
            <Navigator
                style={styles.container}
                initialRoute={{name: 'signin'}}
                renderScene={this.renderScene}
                configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
            />
        )
    }
});

/* ================================== Styles ======================================== */

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
