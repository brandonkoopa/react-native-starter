/**
* SignIn is the a scene where the user enters username & password for authentication.
*/

// Dependencies
import React from 'react-native';
import Button from '../common/button';

// Variables
var {
    StyleSheet,
    Text,
    TextInput,
    View,
} = React;

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        /* ================================== State ======================================== */
        this.state = {
          username: '',
          password: '',
          errorMessage: ''
        };
    }

    // React triggers render() on setState.
    render() {
        return (
            /* ================================== View ======================================== */
            <View style={styles.container}>

                <Text style={[styles.label, styles.signInLabel]}>Sign in</Text>

                <Text style={styles.label}>Username:</Text>

                <TextInput
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}
                    autoCapitalize='none' />

                <Text style={styles.label}>Password:</Text>

                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})} />

                <Text style={styles.label}>{this.state.errorMessage}</Text>

                <Button text={'Sign In'} onPress={this.onSigninPress.bind(this)} />

                <Button text={'I need an account...'} onPress={this.onSignupPress.bind(this)} />
            </View>
        )
    }

    /* ================================== Methods ======================================== */

    onSignupPress() {
        // navigate to signup
        this.props.navigator.push({name: 'signup'});
    }

    onSigninPress() {
        console.log("onSigninPress");
        this.setState({errorMessage: "Logging in..."});

        // Insert user authentication code here.

        // If authentication is a Success
        this.props.navigator.immediatelyResetRouteStack([{ name:'home' }]);

        // If authentication sails, display error: this.setState({errorMessage: error.message});
    }
};

/* ================================== Styles ======================================== */

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#124680'
    },
    input: {
        color: 'white',
        padding: 4,
        height: 40,
        borderColor: 'white',
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    signInLabel: {
        paddingBottom: 40
    },
});
