import React, { Component } from "react"
import { StyleSheet, Button } from "react-native"
import { Container } from "native-base"
import { Actions } from "react-native-router-flux"


import SummaryData from "./SummaryData"
import CostChart from "./CostChart"

class Summary extends Component {

    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' },
          headerLeft: (
              <Button
                  onPress={() => Actions.login()}
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
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5DEC0"
    }
})


export default Summary