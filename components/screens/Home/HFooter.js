import React from "react"
import { Container, Footer, FooterTab, Button, Icon, Text } from "native-base"
import { Actions } from "react-native-router-flux"
import {  StyleSheet } from "react-native"
import Miles from "./Miles"


const HFooter = () => {
    return (
      <Container style={styles.container} >
        <Miles />
        <Footer style={styles.footer}>
          <FooterTab>
            <Button vertical
              onPress={() => Actions.gas()}>
              <Icon style={styles.button} name="speedometer" />
              <Text style={styles.button}>Gas</Text>
            </Button>
            <Button vertical
              onPress={() => Actions.maint()}>
              <Icon  style={styles.button} active name="car" />
              <Text style={styles.button}>Maint.</Text>
            </Button>
            <Button vertical
              onPress={() => Actions.data()}>
              <Icon style={styles.button} name="pie" />
              <Text style={styles.button}>Data</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4B8B9D',
      height: 40
    },
    footer: {
      backgroundColor: '#E5DEC0',
      height: 40
    },
    button: {
      color: '#FBF9F7'
   }
  })

  export default HFooter