import React, { Component } from "react"
import { StyleSheet, Button } from "react-native"
import { Container, Text } from "native-base"
import { Actions } from "react-native-router-flux"

import GasHistory from "./GasHistory"
import MpgChart from "./MpgChart"
import RecentGas from "./RecentGas";


class Gas extends Component {

  state = {
    addFuel: false,
    gasHistory: [],
    fuelForm: {
      date: "",
      miles: 0,
      cost: 0,
      gas_amount: 0
    }
  }

  async componentDidMount () {
    const getGas = await fetch(`http://localhost:3005/maintenance/id/1`)
    const gas = await getGas.json()
    console.log("cdm", gas)
    this.setState({ gasHistory: gas.maintenance })
  }

  // toggleAddFuel = () => {
  //   this.setState({ addFuel: !this.state.addFuel })
  // }
  
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
    console.log("data", this.state.gasHistory)
    return (   
      <Container style={styles.container}>
          <MpgChart />
          <RecentGas />
          <GasHistory gasHistory={this.state.gasHistory} />
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