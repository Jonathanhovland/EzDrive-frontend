import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar, Image} from 'react-native'
import { Actions } from "react-native-router-flux"
import t from "tcomb-form-native"

const Form = t.form.Form

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String,
    make: t.String,
    model: t.String,
    year: t.String,
    miles: t.String,
  })

class SignUp extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' },
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
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='EMAIL' 
                placeholderTextColor="#AFD1D1"/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='USERNAME' 
                placeholderTextColor="#AFD1D1"/>
            <TextInput style = {styles.input}   
                returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                placeholder='PASSWORD' 
                placeholderTextColor="#AFD1D1" 
                secureTextEntry/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='MAKE' 
                placeholderTextColor="#AFD1D1"/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='MODEL' 
                placeholderTextColor="#AFD1D1"/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='YEAR' 
                placeholderTextColor="#AFD1D1"/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='MILES' 
                placeholderTextColor="#AFD1D1"/>
            <TouchableOpacity style={styles.buttonContainerT} onPress={() => Actions.login()}>
                <Text  style={styles.buttonTextT}>SIGN UP</Text>
            </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5DEC0',
        height: 1000,
        padding: 20,
       },
       inputContainer: {
        marginTop: 275,
       },
       input:{
           height: 40,
           backgroundColor: '#4B8B9D',
           marginTop: 10,
           padding: 10,
           color: '#FBF9F7',
           textAlign: 'center'
   
       },
       logo: {
        position: 'absolute',
        width: 400,
        height: 100,
        marginTop: 110
    },
       buttonContainer:{
           backgroundColor: '#AFD1D1',
           paddingVertical: 15,
           marginBottom: 10
       },
       buttonContainerT:{
           backgroundColor: '#FBF9F7',
           paddingVertical: 15,
           marginTop:12
       },
       buttonText:{
           color: '#FBF9F7',
           textAlign: 'center',
           fontWeight: '500'
       }, 
       buttonTextT:{
           color: '#76AFB8',
           textAlign: 'center',
           fontWeight: '500'
    
       }
   })


export default SignUp