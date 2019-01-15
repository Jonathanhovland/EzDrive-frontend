import React, { Component } from "react"
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Footer } from 'native-base';
import { Actions } from "react-native-router-flux"
import { LineChart, Path, Grid } from 'react-native-svg-charts'
import HFooter from "../Home/HFooter";


const GasHistory = () => {
    return (   
      <Container style={styles.container}>
        <Content>
        <Card>
            <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text style={styles.cardText}>History</Text>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              {/* <Icon active name="logo-googleplus" /> */}
              <Left>

              <Text style={styles.cardText}>1/10</Text>
              </Left>
              <Text style={styles.cardText}>$43.30</Text>
              <Right>

              <Text style={styles.cardText}>20 Gal.</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>

              <Text style={styles.cardText}>1/1</Text>
              </Left>
              <Text style={styles.cardText}>$43.30</Text>
              <Right>

              <Text style={styles.cardText}>20 Gal.</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>

              <Text style={styles.cardText}>12/27</Text>
              </Left>
              <Text style={styles.cardText}>$43.30</Text>
              <Right>

              <Text style={styles.cardText}>20 Gal.</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>

              <Text style={styles.cardText}>12/20</Text>
              </Left>
              <Text style={styles.cardText}>$43.30</Text>
              <Right>

              <Text style={styles.cardText}>20 Gal.</Text>
              </Right>
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
    backgroundColor: '#AFD1D1',
    justifyContent: 'center', alignItems: 'center'  

  },
  buttonText:{
    color: '#4B8B9D'
}, 
cardText:{
  color: '#FBF9F7',
  fontWeight: 'bold'
}, 
title: {
  color: '#4B8B9D',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: 92
},


})

export default GasHistory