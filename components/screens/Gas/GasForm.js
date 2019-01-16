import React, { Component } from "react"
import { StyleSheet, TextInput, View, Image, Button } from "react-native"
import { Content, Card, CardItem, Text } from "native-base"
import { Actions } from "react-native-router-flux"




class GasForm extends Component {
    
    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' },
          headerLeft: (
              <Button
                  onPress={() => Actions.gas()}
                  title="Gas"
                  color="#FBF9F7"
              />
          ),
          headerRight: (
            <Button
            title="Add Fuel"
            color="#FBF9F7"
        />
          )
    
    }
    render() {
    return(
        <Content style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require("../../../img/logo.jpg")} />
            </View>
            <Card style={styles.card}>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Enter Date...' 
                        placeholderTextColor="#AFD1D1"/>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Enter Miles...' 
                        placeholderTextColor="#AFD1D1"/>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Enter Cost...' 
                        placeholderTextColor="#AFD1D1"/>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Enter Gallons...' 
                        placeholderTextColor="#AFD1D1"/>
                </CardItem>
                <CardItem footer button style={styles.button} onPress={() => Actions.gas()}>
                    <Text style={styles.buttonText}>Submit</Text>
                </CardItem>
           </Card>
           <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require("../../../img/logo2.png")} />
            </View>
        </Content>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5DEC0",
        textAlign: "center"
    },
    card: {
        marginTop: 245
    },
    cardContainer: {
        backgroundColor: "#76AFB8",
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        color: "#FBF9F7",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }, 
    button: {
        backgroundColor: "#FBF9F7",
        justifyContent: "center",
        alignItems: "center"  
    },
    buttonText:{
        color: "#4B8B9D",
        fontWeight: "bold",
        fontSize: 20
    },
    logo:{
        position: "absolute",
        width: 350,
        height: 100,
        marginTop: 75,
        marginLeft: 13
    }
})


export default GasForm