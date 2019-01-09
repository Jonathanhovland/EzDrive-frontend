import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from "react-native"
import LoginForm from "./LoginForm";

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

// define your styles
const styles = StyleSheet.create({
    container: {
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
    }
})

export default Login