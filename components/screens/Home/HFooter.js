import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from "react-native-router-flux"

const HFooter = () => {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical
            onPress={() => Actions.gas()}>
              <Icon name="speedometer" />
              <Text>Gas</Text>
            </Button>
            <Button vertical
            onPress={() => Actions.maint()}>
              <Icon active name="car" />
              <Text>Maint.</Text>
            </Button>
            <Button vertical
            onPress={() => Actions.data()}>
              <Icon name="pie" />
              <Text>Data</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  export default HFooter