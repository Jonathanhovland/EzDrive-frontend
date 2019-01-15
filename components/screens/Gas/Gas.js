import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Container, Text } from "native-base"

import GasHistory from "./GasHistory"
import GasForm from "./GasForm"
import MpgChart from "./MpgChart"


class Gas extends Component {
  
  static navigationOptions = {
    headerStyle: { backgroundColor: "#4B8B9D" }
  }
  
  render() {
    return (   
      <Container style={styles.container}>
          <MpgChart />
          <GasForm />
          <GasHistory />
          <Text style={styles.text}> $2310.30 </Text>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#E5DEC0",
      textAlign: "center"
  },
  text:{
    color: '#4B8B9D',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold',
  }
})


export default Gas