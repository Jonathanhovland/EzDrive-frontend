import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const HFooter = () => {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="speedometer" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon active name="car" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  export default HFooter