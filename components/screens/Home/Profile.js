import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base'
import {  StyleSheet, Image} from "react-native"



const Profile = () =>  {
    return (
        <Container style={styles.container} >
            <Header style={styles.header}>
                <Left style={{paddingBottom: 35, paddingLeft:15}}>
                <Thumbnail  source={require('../../../img/3.jpg')}/>
                </Left>
                <Body style={styles.headerBody}>
                    <Text style={styles.cardText}>2016</Text>
                    <Text style={styles.cardText}>Toyota 4Runner</Text>
                    {/* <Text note>Purchased: 11/2017</Text> */}
                </Body>
                <Right style={{paddingBottom: 30}}>
                <Text note>11/2016</Text>
                </Right>
            </Header>
            <Content>
                <Card >
                <CardItem style={styles.cardHeader}>
                    <Text style={styles.cardText}>Info                  </Text>
                    <Text style={styles.cardText}>      Due Date</Text>
                    <Right>
                        <Text  style={styles.cardText}>$    </Text>
                    </Right>
                    </CardItem>
                    <CardItem style={styles.cards}>
                    <Text style={styles.cardText}>Payment              </Text>
                    <Text style={styles.cardText}>Monthly</Text>
                    <Right>
                        <Text style={styles.cardText}>$500</Text>
                    </Right>
                    </CardItem>
                    <CardItem style={styles.cards}>
                    <Text style={styles.cardText}>Insurance          </Text>
                    <Text style={styles.cardText}>  Monthly</Text>
                    <Right>
                        <Text style={styles.cardText}>$110</Text>
                    </Right>
                    </CardItem>
                    <CardItem style={styles.cards}>
                    <Text style={styles.cardText}>Registration          </Text>
                    <Text style={styles.cardText}> (1/2020)</Text>
                    <Right>
                        <Text  style={styles.cardText}>$350</Text>
                    </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
        
        const styles = StyleSheet.create({
            container: {
                backgroundColor: '#E5DEC0'
          
            },
            header: {
                backgroundColor: '#E5DEC0'          
            },
            headerBody: {
                marginBottom: 28,
                textAlign: 'center'
            },
            cardHeader: {
              backgroundColor: '#76AFB8',
          
            },
            cardText:{
                color: '#FBF9F7'
              }, 
            cards: {
                backgroundColor: '#AFD1D1',
            
              },
        })
            
            
            
            export default Profile