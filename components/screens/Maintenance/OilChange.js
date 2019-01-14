// import React, { Component } from "react"
import {  StyleSheet, Image, View} from "react-native"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
// import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Thumbnail, Body } from 'native-base';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';
import ProgressBar from 'react-native-progress/Bar'




const OilChange = () => {


          return (
            <View>
                

            <ProgressBar progress={0.3} width={300} height={15} style={styles.progressBar}/>
          
                <Right>

            <Text style={ styles.text2}> 1245 Miles</Text>
                </Right>
                <ProgressBar progress={0.3} width={300} height={15} style={styles.progressBar}/>
          
                <Right>

            <Text style={ styles.text2}> 1245 Miles</Text>
                </Right>
            </View>
              )
            }
  

        const styles = StyleSheet.create({
            container: {
                  backgroundColor: '#E5DEC0',
                  height: 200,
                  marginBottom: 0
            },
            progressBar: {
              color: 'pink',
              textAlign: 'center',
              marginTop: 10,
           },
           text2: {
            color: '#4B8B9D',
            textAlign: 'center',
            marginBottom: 5,
            fontWeight: 'bold',
            fontSize: 20
         },

            })
            
            
            
            export default OilChange