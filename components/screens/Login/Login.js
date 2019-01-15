import React, { Component } from "react"
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native"
import { Button } from "native-base"


import LoginForm from "./LoginForm"


class Login extends Component {
    
    static navigationOptions = {
        headerStyle: { backgroundColor: "#4B8B9D", color: "#fff"},
        headerLeft: (
            <Button
                onPress={() => Actions.home()}
                title="Home"
                color="#FBF9F7"
            />
        )
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require("../../../img/logo3.png")} />
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
        backgroundColor: "#E5DEC0",
        flex: 1,
        width: 375,
    },
    loginContainer:{
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"
    },
    logo: {
        position: "absolute",
        width: 400,
        height: 100
    }
})


export default Login