import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';


const Profile = () =>  {
    return (
        <Container>
            <Header>
                <Thumbnail source={require('../../../img/3.jpg')} />
                <Body>
                    <Text>2016 Toyota 4Runner</Text>
                    <Text note>Purchased: 11/2017</Text>
                </Body>
            </Header>
            <Content>
                <Card>
                <CardItem>
                    <Text>Info                  </Text>
                    <Text>      Due Date</Text>
                    <Right>
                        <Text>$    </Text>
                    </Right>
                    </CardItem>
                    <CardItem>
                    <Text>Payment              </Text>
                    <Text>Monthly</Text>
                    <Right>
                        <Text>$500</Text>
                    </Right>
                    </CardItem>
                    <CardItem>
                    <Text>Insurance          </Text>
                    <Text>  Monthly</Text>
                    <Right>
                        <Text>$110</Text>
                    </Right>
                    </CardItem>
                    <CardItem>
                    <Text>Registration          </Text>
                    <Text> (1/2020)</Text>
                    <Right>
                        <Text>$350</Text>
                    </Right>
                    </CardItem>
                </Card>
            </Content>
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
            
            
            
            export default Profile