import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"



const Totals = () =>  {
    return (

        <Container style={styles.container}>
            <Content>
            <Card>
             <CardItem style={styles.cardContainer}>
              <Left>

              <Text style={styles.cardText1}>Last Maint.</Text>
              </Left>
              <Text style={styles.cardText1}>10/13/18</Text>
              <Right>

            <Text style={styles.cardText1}>$57.30</Text>
            </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>

              <Text style={styles.cardText1}>Next Maint.</Text>
              </Left>
              <Text style={styles.cardText1}>1245 Miles</Text>
              <Right>

            <Text style={styles.cardText1}>$120.00</Text>
            </Right>
             </CardItem>
           </Card>
        </Content>
        </Container>
    )
}
        
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5DEC0',
        marginTop: -75

  
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
  },
  cardText2:{
    color: '#4B8B9D',
},
  button: {
    justifyContent: 'center', alignItems: 'center'  
  }
  
  })
            
            
export default Totals