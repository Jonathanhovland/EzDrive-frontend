import React, { Component } from "react"
import { StyleSheet, Button } from "react-native"
import { Container, Text } from "native-base"
import { Actions } from "react-native-router-flux"

import GasHistory from "./GasHistory"
import MpgChart from "./MpgChart"
import RecentGas from "./RecentGas";


class Gas extends Component {

  state = {
    gasHistory: []
  }

  async componentDidMount () {
    const getGas = await fetch("https://ezzdrive.herokuapp.com/maintenance/id/1")
    const gas = await getGas.json()
    this.setState({ gasHistory: gas.maintenance })
  }
  
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
          title="Gas"
          color="#FBF9F7"
        />
      )
  }
  
  render() {
    const {gasHistory} = this.state
    if(gasHistory.length > 0){
    return (   
      <Container style={styles.container}>
          <MpgChart />
          <RecentGas gasHistory={gasHistory}/>
          <GasHistory gasHistory={gasHistory} />
          <Text style={styles.text}> $2310.30 </Text>
      </Container>
    )
    }else{
      return(
        <Container>
          <MpgChart />
        </Container>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5DEC0",
    textAlign: "center"
  },
  text:{
    color: "#4B8B9D",
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold"
  }
})


export default Gas