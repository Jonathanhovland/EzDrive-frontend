// import React, { Component } from "react"
import {  StyleSheet, Image} from "react-native"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
// import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Thumbnail, Body } from 'native-base';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import Profile from "./Profile";




const MaintChart = () => {

        return (
            <Container>
        <ProgressCircle
              style={ { height: 200 } }
              progress={ 0.7 }
              progressColor={'#4B8B9D'}
              startAngle={ -Math.PI * 0.8 }
              endAngle={ Math.PI * 0.8 }
          /> 
              </Container>
            )
          }

        
        // const styles = StyleSheet.create({
          //   container: {
            //       backgroundColor: '#E5DEC0',
            //       flex: 1,
            //       width: 375,
            //   }
            // })
            
            
            
            export default MaintChart