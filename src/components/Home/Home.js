import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button} from "react-native"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'


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
          <View style={styles.container}>
          <Button
          onPress={() => Actions.gas()}
          title="GAs"
          color="#FBF9F7"
          />
          <ProgressCircle
                style={ { height: 200 } }
                progress={ 0.7 }
                progressColor={'#4B8B9D'}
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#E5DEC0',
      flex: 1,
      width: 375,
  }
})



export default Home