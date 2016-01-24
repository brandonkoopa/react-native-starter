/**
* Home is the landing scene, after successful authentication.
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

export default class Home extends React.Component {
  constructor(props) {
      super(props);

      /* ================================== State ======================================== */
      this.state = {
          errorMessage: ''
      };
  }

  // React triggers render() on setState.
  render() {
    return (
        /* ================================== View ======================================== */
        <View style={styles.container}>
            <Text style={styles.label}>Welcome Home!</Text>
        </View>
    )
  }

  /* ================================== Methods ======================================== */

  /*    Methods go here     */
};

/* ================================== Styles ======================================== */

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
