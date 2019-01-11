import React, { Component } from "react"
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { Actions } from "react-native-router-flux"
import { ProgressCircle }  from 'react-native-svg-charts'


const GasCard = () => {
    return (   
      <Container style={styles.container}>
      <ProgressCircle
      style={ { height: 200 } }
      progress={ 0.7 }
      progressColor={'#4B8B9D'}
      />
        <Content>
        <Card>
            <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text style={styles.cardText}>Mileage:  42,459</Text>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text style={styles.cardText}>Gas:  $241.34</Text>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text style={styles.cardText}>Gallons:  25</Text>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text style={styles.cardText}>Miles Per Gallon:  17.2</Text>
             </CardItem>
             <CardItem footer button style={styles.button} onPress={() => Actions.login()}>
              <Text style={styles.buttonText}>Add Fuel Receipt</Text>
            </CardItem>
           </Card>
        </Content>
      </Container>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#E5DEC0',

  },
  cardContainer: {
    backgroundColor: '#76AFB8',

  },
  button: {
    backgroundColor: '#FBF9F7'
  },
  buttonText:{
    color: '#4B8B9D'
}, 
cardText:{
  color: '#FBF9F7'
}, 

})

export default GasCard