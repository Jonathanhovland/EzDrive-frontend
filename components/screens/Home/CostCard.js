import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"



const CostCard = () =>  {
    return (

        <Container style={styles.container}>
<Content>
        <Card>
            <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text style={styles.cardText}>Current Mileage:  42,459</Text>
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
              <Text style={styles.cardText}>Gallons:  25</Text>
             </CardItem>
           </Card>
        </Content>
        </Container>
    )
}
        
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5DEC0',
        marginTop: 18

  
    },
    cardContainer: {
      backgroundColor: '#76AFB8',
      justifyContent: 'center', alignItems: 'center'  
    },
    button: {
      backgroundColor: '#FBF9F7'
    },
    buttonText:{
      color: '#4B8B9D',
  }, 
  cardText:{
    color: '#FBF9F7',
  }
  
  })
            
            
            
            export default CostCard