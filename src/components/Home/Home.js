import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button} from "react-native"
import { withNavigation } from "react-navigation"
import { Actions } from "react-native-router-flux"

class Home extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' },
        headerLeft: (
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="SIGN OUT"
            color="#FBF9F7"
          />
        ),
          headerRight: (
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="MAINT."
              color="#FBF9F7"
            />
          )
      }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5DEC0' }}>
                <Text>Home</Text>
            </View>
        )
    }
}


export default withNavigation(Home)