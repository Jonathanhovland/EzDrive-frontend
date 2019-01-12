import React, { Component } from "react"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Thumbnail, Body } from 'native-base';


const CostCard = () =>  {
    return (
        <Container>
            <Content>
                <Card>
                <CardItem>
                    <Text>Monthly Total: </Text>
                    <Right>
                        <Text>$234.56</Text>
                    </Right>
                    </CardItem>
                    <CardItem>
                    <Text>Yearly Total:</Text>
                    <Right>
                        <Text>$553.31</Text>
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
            
            
            
            export default CostCard