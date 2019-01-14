import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from "react-native-router-flux"
import {  StyleSheet, Image} from "react-native"


const HFooter = () => {
    return (
      <Container >
        <Content />
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
    },
    white: {
      color: '#FBF9F7'
   }

    })

  export default HFooter