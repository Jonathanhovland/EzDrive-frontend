// import React, { Component } from "react"
import {  StyleSheet, Image} from "react-native"
import { Actions } from "react-native-router-flux"
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body, Footer, FooterTab, Icon, View } from 'native-base';
import Profile from "./Profile";
import MaintChart from "./MaintChart";
import CostCard from "./Miles";
import HFooter from "./HFooter";





class Home extends Component {

  static navigationOptions = {
      headerStyle: { backgroundColor: '#4B8B9D' },
      headerLeft: (
        <Button
          onPress={() => Actions.login()}
          title="Sign Out"
          color="#FBF9F7"
        />
      )
    }
    
    render() {
        return (
    
            <Container style={styles.container}>
              <Profile />
            <MaintChart style={styles.container}/>
            <HFooter></HFooter> 
            </Container>
            )
          }
        }
        
        const styles = StyleSheet.create({
            container: {
                  backgroundColor: '#E5DEC0'
              }
            })
            
            
            
            export default Home