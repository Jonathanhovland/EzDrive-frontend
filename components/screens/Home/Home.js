import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Container, Button } from "native-base"
import { Actions } from "react-native-router-flux"

import Profile from "./Profile";
import MaintChart from "./MaintChart";
import HFooter from "./HFooter";


class Home extends Component {

  static navigationOptions = {
      headerStyle: { backgroundColor: '#4B8B9D' },
        headerLeft: (
            <Button
                onPress={() => Actions.login()}
                title="Log in"
                color="#FBF9F7"
            />
      )
  }
    
  render() {
    return (
      <Container style={styles.container}>
        <Profile />
        <MaintChart/>
        <HFooter></HFooter> 
      </Container>
    )
  }
}
        

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5DEC0'
  }
})
            
            
export default Home