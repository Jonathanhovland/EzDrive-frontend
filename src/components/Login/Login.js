import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import LoginForm from "./LoginForm"
import { Actions } from "react-native-router-flux"


class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../../img/logo3.png')} />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5DEC0',
        flex: 1,
        width: 375,
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 400,
        height: 100
    },
    buttonContainer:{
        backgroundColor: '#AFD1D1',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText:{
        color: '#FBF9F7',
        textAlign: 'center',
        fontWeight: '500'
    }
})

export default Login