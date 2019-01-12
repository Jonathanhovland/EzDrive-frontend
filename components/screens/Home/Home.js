// import React, { Component } from "react"
import {  StyleSheet, Image} from "react-native"
import { Actions } from "react-native-router-flux"
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body, Footer, FooterTab, Icon } from 'native-base';
import Profile from "./Profile";
import MaintChart from "./MaintChart";




class Home extends Component {

  static navigationOptions = {
      headerStyle: { backgroundColor: '#4B8B9D' },
      headerLeft: (
        <Button
          onPress={() => Actions.login()}
          title="Sign Out"
          color="#FBF9F7"
        />
      ),
        headerRight: (
          <Button
            onPress={() => Actions.maint()}
            title="Maintenance"
            color="#FBF9F7"
          />
        )
    }
    
    render() {
        return (
            <Container>
              <Profile />
              
              <MaintChart />
              <Footer>
          <FooterTab>
            <Button vertical active
            onPress={() => Actions.gas()}
            >
              <Icon active name="navigate" />
              <Text>Gas</Text>
            </Button>
            <Button vertical
            onPress={() => Actions.maint()}>
              <Icon name="person" />
              <Text>Maint.</Text>
            </Button>
            <Button vertical
            onPress={() => Actions.data()}>
              <Icon name="camera" />
              <Text>Data</Text>
            </Button>
          </FooterTab>
        </Footer>
              </Container>
            )
          }
        }
        
        // const styles = StyleSheet.create({
          //   container: {
            //       backgroundColor: '#E5DEC0',
            //       flex: 1,
            //       width: 375,
            //   }
            // })
            
            
            
            export default Home