import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"



const Miles = () =>  {
    return (

        <Container style={styles.container}>
            <Content>
            <Card>
             <CardItem style={styles.cardContainer}>
              <Text style={styles.cardText1}>Miles</Text>
             </CardItem>
            <CardItem style={styles.cardContainer}>
              <Text style={styles.cardText1}>42,459</Text>
             </CardItem>
             <CardItem footer button style={styles.button} onPress={() => Actions.login()}>
              <Text style={styles.cardText2}>Schedule Maintenance</Text>
            </CardItem>
           </Card>
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
    fontSize: 20,
    fontWeight: "bold"
  },
  cardText2:{
    color: '#4B8B9D',
    },
  button: {
    justifyContent: 'center', alignItems: 'center'  
  }
  
  })
            
            
export default Miles