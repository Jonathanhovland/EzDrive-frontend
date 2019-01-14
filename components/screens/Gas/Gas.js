import React, { Component } from "react"
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Footer } from 'native-base';
import { Actions } from "react-native-router-flux"
import { LineChart, Path, Grid } from 'react-native-svg-charts'
import HFooter from "../Home/HFooter";


const Gas = () => {


  const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

  const Shadow = ({ line }) => (
      <Path
          key={'shadow'}
          y={2}
          d={line}
          fill={'none'}
          strokeWidth={4}
          stroke={'#4B8B9D'}
      />
  )
    return (   
      <Container style={styles.container}>
        <LineChart
          style={ { height: 200 } }
          data={ data }
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={ { top: 20, bottom: 20 } }
        >
          <Grid/>
          <Shadow/>
        </LineChart>
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
      backgroundColor: '#E5DEC0'

  },
  cardContainer: {
    backgroundColor: '#76AFB8',
    justifyContent: 'center', alignItems: 'center'  

  },
  button: {
    backgroundColor: '#FBF9F7',
    justifyContent: 'center', alignItems: 'center'  

  },
  buttonText:{
    color: '#4B8B9D'
}, 
cardText:{
  color: '#FBF9F7'
}, 
title: {
  color: '#4B8B9D',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: 92
}

})

export default Gas