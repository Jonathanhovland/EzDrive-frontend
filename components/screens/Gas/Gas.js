import React, { Component } from "react"
import { StyleSheet, Button } from "react-native"
import { Container, Text } from "native-base"
import { Actions } from "react-native-router-flux"

import GasHistory from "./GasHistory"
import GasForm from "./GasForm"
import MpgChart from "./MpgChart"


class Gas extends Component {

  state = {
    addFuel: false,
    allGas: [],
    gasForm: {
      date: "",
      miles: 0,
      cost: 0,
      gas_amount: 0,
    }
  }

  async componentDidMount() {
    this.getGas()
  }

  async getGas () {
    const response = await fetch("http://localhost:3005/maintenance/id/1")
    const gas = await response.json()
    this.setState({ allGas: gas })
  }
  
  static navigationOptions = {
    headerStyle: { backgroundColor: '#4B8B9D' },
      headerLeft: (
          <Button
              onPress={() => Actions.home()}
              title="Home"
              color="#FBF9F7"
          />
      ),
      headerRight: (
        <Button
        title="Gas"
        color="#FBF9F7"
    />
      )

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