import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar, Image} from "react-native"
import { Actions } from "react-native-router-flux"

class SignUp extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: "#4B8B9D" },
        headerLeft: (
            <Button
                onPress={() => Actions.login()}
                title="LOG IN"
                color="#FBF9F7"
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Image resizeMode="contain" style={styles.logo} source={require("../../../img/logo3.png")} />
            <View style={styles.inputContainer}>
            <TextInput style = {styles.inputDark} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder="EMAIL" 
                placeholderTextColor="#FBF9F7"/>
            <TextInput style = {styles.inputDark} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                placeholder="USERNAME" 
                placeholderTextColor="#FBF9F7"/>
            <TextInput style = {styles.inputMed}   
                returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                placeholder='PASSWORD' 
                placeholderTextColor="#FBF9F7" 
                secureTextEntry/>
            <TextInput style = {styles.inputMed} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                placeholder="MAKE" 
                placeholderTextColor="#FBF9F7"/>
            <TextInput style = {styles.inputMed} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                placeholder="MODEL" 
                placeholderTextColor="#FBF9F7"/>
            <TextInput style = {styles.inputLight} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                placeholder="YEAR" 
                placeholderTextColor="#FBF9F7"/>
            <TextInput style = {styles.inputLight} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                placeholder="MILES" 
                placeholderTextColor="#FBF9F7"/>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.login()}>
                <Text  style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5DEC0",
        height: 1000,
        padding: 20,
    },
    inputContainer: {
        marginTop: 275,
    },
    inputDark: {
        height: 40,
        backgroundColor: "#4B8B9D",
        marginTop: 10,
        padding: 10,
        color: '#FBF9F7',
        textAlign: "center"
    },
    inputMed: {
        height: 40,
        backgroundColor: "#76AFB8",
        marginTop: 10,
        padding: 10,
        color: '#FBF9F7',
        textAlign: "center"
    },
    inputLight: {
        height: 40,
        backgroundColor: "#AFD1D1",
        marginTop: 10,
        padding: 10,
        color: '#FBF9F7',
        textAlign: "center"
    },
    logo: {
        position: "absolute",
        width: 400,
        height: 100,
        marginTop: 110
    },
    buttonContainer: {
        backgroundColor: "#FBF9F7",
        paddingVertical: 15,
        marginTop:12
    },
    buttonText: {
        color: "#4B8B9D",
        textAlign: "center",
        fontWeight: "500"
    }
})


export default SignUp