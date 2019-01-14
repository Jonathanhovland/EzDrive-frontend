// import React, { Component } from "react"
import {  StyleSheet, Image, View} from "react-native"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
// import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Thumbnail, Body } from 'native-base';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import Profile from "./Profile";




const MaintChart = () => {

        return (
          <View>
            <Text style={ styles.text1}> Next Maintenance</Text>
        <ProgressCircle
              style={ styles.container}
              progress={ 0.7 }
              progressColor={'#4B8B9D'}
              startAngle={ -Math.PI * 0.8 }
              endAngle={ Math.PI * 0.8 }
          /> 
          <Text style={ styles.text2}> 1245 Miles</Text>
          </View>
            )
          }

        
        const styles = StyleSheet.create({
            container: {
                  backgroundColor: '#E5DEC0',
                  height: 200,
                  marginBottom: -10
            },
            text1: {
              color: '#4B8B9D',
              textAlign: 'center',
              marginTop: -25,
              marginBottom: 3,
              fontWeight: 'bold'
           },
           text2: {
            color: '#4B8B9D',
            textAlign: 'center',
            marginBottom: 5,
            fontWeight: 'bold',
            marginBottom: -2
         },

            })
            
            
            
            export default MaintChart