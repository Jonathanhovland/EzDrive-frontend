import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button} from "react-native"
import { withNavigation } from "react-navigation"
import { Actions } from "react-native-router-flux"
import HomeForm from "./GasCard";
import GasCard from "./GasCard";

class Home extends Component {

  state = {
    mileCounter: 0,
    gasCost: 0,
    gasAmount: 0,
    maintCost: 0,
    monthlyCost: 0
  }



  static navigationOptions = {
      headerStyle: { backgroundColor: '#4B8B9D' },
      headerLeft: (
        <Button
          onPress={() => Actions.login()}
          title="SIGN OUT"
          color="#FBF9F7"
        />
      ),
        headerRight: (
          <Button
            onPress={() => Actions.maint()}
            title="MAINT."
            color="#FBF9F7"
          />
        )
    }
    
    render() {
        return (
        
            <GasCard />
    
        )
    }
}



export default withNavigation(Home)