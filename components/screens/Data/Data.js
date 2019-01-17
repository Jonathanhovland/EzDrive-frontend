import React, { Component } from "react"
import { StyleSheet, Button, Text } from "react-native"
import { Container } from "native-base"
import { Actions } from "react-native-router-flux"


import SummaryData from "./SummaryData"
import CostChart from "./CostChart"

class Summary extends Component {

    static navigationOptions = {
        headerStyle: { backgroundColor: "#4B8B9D" },
          headerLeft: (
              <Button
                  onPress={() => Actions.home()}
                  title="Home"
                  color="#FBF9F7"
              />
          ),
          headerRight: (
            <Button
            title="Data"
            color="#FBF9F7"
        />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <CostChart />
                <SummaryData />
                <Text style={styles.text}> Average $ Per Mile</Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5DEC0"
    },
    text: {
        textAlign: "center",
        paddingBottom: 30,
        fontSize:20,
        color: "#4B8B9D"
    }
})


export default Summary