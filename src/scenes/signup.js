/**
* SignUp is the a scene where the creates a new account.
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

export default class SignUp extends React.Component {
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
            <Text style={[styles.label, styles.signUpLabel]}>Sign Up</Text>

            <Text style={styles.label}>Username:</Text>
            <TextInput
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
                style={styles.input}
                autoCapitalize='none'
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
                style={styles.input}
                autoCapitalize='none'
            />

            <Text style={styles.label}>Password:</Text>
            <TextInput
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                style={styles.input}
            />

            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                secureTextEntry={true}
                value={this.state.passwordConfirmation}
                onChangeText={(text) => this.setState({passwordConfirmation: text})}
                style={styles.input}
            />

            <Text style={styles.label}>{this.state.errorMessage}</Text>

            <Button text={'Signup'} onPress={this.onSignUpPress.bind(this)} />
            <Button text={'I have an account...'} onPress={this.onSigninPress.bind(this)} />
        </View>
    )
  }

  /* ================================== Methods ======================================== */

  onSignUpPress() {
      if (this.state.password != this.state.passwordConfirmation) {
          return this.setState({errorMessage: 'Your passwords do not match.'});
      }

      // Insert user authentication code here.

      // If authentication is a Success
      this.props.navigator.immediatelyResetRouteStack([{ name:'home' }]);

      // If authentication sails, display error: this.setState({errorMessage: error.message});
    }

  onSigninPress() {
      // pop back to the sign in view
      this.props.navigator.pop();
  }
};

/* ================================== Styles ======================================== */

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#128072'
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
    signUpLabel: {
        paddingBottom: 40
    },
});
