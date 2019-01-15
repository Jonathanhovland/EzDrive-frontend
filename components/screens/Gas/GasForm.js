import React from "react"
import { StyleSheet } from "react-native"
import { Content, Card, CardItem, Text } from "native-base"
import { Actions } from "react-native-router-flux"


const GasForm = () => {
    return(
        <Content>
            <Card>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Mileage:  42,459</Text>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Gas:  $43.34</Text>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Gallons:  20</Text>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Miles Per Gallon:  17.2</Text>
                </CardItem>
                <CardItem footer button style={styles.button} onPress={() => Actions.login()}>
                    <Text style={styles.buttonText}>Add Fuel Receipt</Text>
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
    cardText:{
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