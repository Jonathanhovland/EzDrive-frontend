//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};


// create a component
class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => this.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email or Mobile Num' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}   
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           placeholder='Password' 
                           placeholderTextColor='rgba(225,225,225,0.7)' 
                           secureTextEntry/>
                 {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
              <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonContainerT} onPress={onButtonPress}>
                    <Text  style={styles.buttonTextT}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: '#4B8B9D',
        marginBottom: 10,
        padding: 10,
        color: '#FBF9F7'
    },
    buttonContainer:{
        backgroundColor: '#76AFB8',
        paddingVertical: 15
    },
    buttonContainerT:{
        backgroundColor: '#FBF9F7',
        paddingVertical: 15
    },
    buttonText:{
        color: '#FBF9F7',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    buttonTextT:{
        color: '#76AFB8',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#AFD1D1',
       color: '#FBF9F7'
    }
   
});

//make this component available to the app
export default LoginForm;