import React from "react"
import { StyleSheet } from "react-native"
import { Content, Card, CardItem, Text } from "native-base"
import { Actions } from "react-native-router-flux"


const RecentGas = ({gasHistory}) => {

    return(
        <Content>
            <Card>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>{gasHistory[gasHistory.length-1].date}</Text>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Mileage:  {gasHistory[gasHistory.length-1].miles}</Text>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Gas:  ${gasHistory[gasHistory.length-1].cost}</Text>
                </CardItem>
                <CardItem style={styles.cardContainer}>
                    <Text style={styles.cardText}>Gallons:  {gasHistory[gasHistory.length-1].gas_amount}</Text>
                </CardItem>
                <CardItem footer button style={styles.button} onPress={() => Actions.gasform()}>
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


export default RecentGas