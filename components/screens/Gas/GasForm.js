import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { Content, Card, CardItem, Text } from "native-base"
import { Actions } from "react-native-router-flux"


const GasForm = () => {
    return(
        <Content>
            <Card>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Date' 
                        placeholderTextColor="#FBF9F7"/>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Miles' 
                        placeholderTextColor="#FBF9F7"/>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Cost' 
                        placeholderTextColor="#FBF9F7"/>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <TextInput style = {styles.input} 
                        returnKeyType="next" 
                        placeholder='Gallons' 
                        placeholderTextColor="#FBF9F7"/>
                </CardItem>
                <CardItem footer button style={styles.button} onPress={() => Actions.gas()}>
                    <Text style={styles.buttonText}>Submit</Text>
                </CardItem>
           </Card>
        </Content>
    )
}

const styles = StyleSheet.create({
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
        color: "#4B8B9D"
    }
})


export default GasForm