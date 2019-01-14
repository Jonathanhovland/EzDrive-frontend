import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from "react-native-router-flux"
import {  StyleSheet, Image} from "react-native"
import CostCard from './CostCard';


const HFooter = () => {
    return (
      <Container style={styles.container1} >
     
      
        <CostCard />
        <Footer style={styles.container}>
          <FooterTab>
            <Button vertical
            onPress={() => Actions.gas()}>
              <Icon style={styles.white} name="speedometer" />
              <Text style={styles.white}>Gas</Text>
            </Button>
            <Button vertical
            onPress={() => Actions.maint()}
            >
              <Icon  style={styles.white} active name="car" />
              <Text style={styles.white}>Maint.</Text>
            </Button>
            <Button vertical
            onPress={() => Actions.data()}>
              <Icon style={styles.white} name="pie" />
              <Text style={styles.white}>Data</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  const styles = StyleSheet.create({
    container: {
          backgroundColor: '#4B8B9D',
          height: 40
  
    },
    container1: {
      backgroundColor: '#E5DEC0',
      height: 40

},
    white: {
      color: '#FBF9F7'
   }

    })

  export default HFooter