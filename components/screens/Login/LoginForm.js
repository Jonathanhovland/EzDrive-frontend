import React from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,StatusBar } from "react-native"
import { Actions } from "react-native-router-flux"


const LoginForm = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType="email-address" 
                returnKeyType="next" 
                placeholder="Username" 
                placeholderTextColor="#FBF9F7"/>
            <TextInput style = {styles.input}   
                returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                placeholder="Password" 
                placeholderTextColor="#FBF9F7" 
                secureTextEntry/>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.home()}>
                <Text  style={styles.buttonText}>Login</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.buttonContainerT} onPress={() => Actions.signup()}>
                <Text  style={styles.buttonTextT}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: "#4B8B9D",
        marginBottom: 10,
        padding: 10,
        color: "#FBF9F7",
        textAlign: "center"
    },
    buttonContainer:{
        backgroundColor: "#AFD1D1",
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonContainerT:{
        backgroundColor: "#FBF9F7",
        paddingVertical: 15
    },
    buttonText:{
        color: "#FBF9F7",
        textAlign: "center",
        fontWeight: "500"
    }, 
    buttonTextT:{
        color: "#4B8B9D",
        textAlign: "center",
        fontWeight: "500"
    }
})


export default LoginForm