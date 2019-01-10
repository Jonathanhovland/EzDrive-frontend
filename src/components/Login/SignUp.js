import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from "react-native"
import { Actions } from "react-native-router-flux"

class SignUp extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5DEC0' }}>
                <Text>Sign Up</Text>
            </View>
        )
    }
}


export default SignUp