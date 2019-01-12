import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button} from "react-native"
import { Actions } from "react-native-router-flux"
import GasCard from "./GasCard";

class Home extends Component {

  static navigationOptions = {
      headerStyle: { backgroundColor: '#4B8B9D' },
      headerLeft: (
        <Button
          onPress={() => Actions.login()}
          title="Sign Out"
          color="#FBF9F7"
        />
      ),
        headerRight: (
          <Button
            onPress={() => Actions.maint()}
            title="Maintenance"
            color="#FBF9F7"
          />
        )
    }
    
    render() {
        return (
          <Button
          onPress={() => Actions.gas()}
          title="GAs"
          color="#FBF9F7"
          />
    
        )
    }
}



export default Home