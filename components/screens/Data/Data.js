import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Container } from "native-base"

import SummaryData from "./SummaryData"
import CostChart from "./CostChart"

class Summary extends Component {

    static navigationOptions = {
        headerStyle: { backgroundColor: "#4B8B9D" }
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