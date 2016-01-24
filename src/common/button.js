import React from 'react-native';

var {
    Text,
    StyleSheet,
    TouchableHighlight
    } = React;

/**
 * Button extends React's TouchableHighlight.
 */
export default class Button extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor={'gray'}
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        height: 30,
        width: 200
    },
    buttonText: {
        flex: 1,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        alignSelf: 'center'
    }
});
