import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import AverageChart from "./AverageChart";



const SummaryData = () =>  {
    return (

        <Container style={styles.container}>
            <Content>
            <Card>
            <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>
                <Text style={styles.cardText1}>Payments</Text>
              </Left>
              <Right>
                <Text style={styles.cardText1}>$10,203.01</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>
                <Text style={styles.cardText1}>Insurance</Text>
              </Left>
              <Right>
                <Text style={styles.cardText1}>$4000.08</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>
                <Text style={styles.cardText1}>Registration</Text>
              </Left>
              <Right>
                <Text style={styles.cardText1}>$900.76</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>
                <Text style={styles.cardText1}>Maintenance</Text>
              </Left>
              <Right>
                <Text style={styles.cardText1}>$2300.98</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>
                <Text style={styles.cardText1}>Gas</Text>
              </Left>
              <Right>
                <Text style={styles.cardText1}>$3,203.01</Text>
              </Right>
             </CardItem>
            <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>
                <Text style={styles.cardText2}>Total</Text>
              </Left>
              <Right>
                <Text style={styles.cardText2}>$21,203.01</Text>
              </Right>
             </CardItem>
           </Card>
        <AverageChart />
        </Content>
        </Container>
    )
}
        
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5DEC0',
        marginTop: 0

  
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
    color: '#FBF9F7'
  },
  cardText1:{
    color: '#FBF9F7',
    fontSize: 20
  },
  cardText2:{
    color: '#FBF9F7',
    fontSize: 25  ,
    fontWeight: 'bold'
  },

  
  })
            
            
export default SummaryData