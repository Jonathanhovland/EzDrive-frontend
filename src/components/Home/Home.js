// import React, { Component } from "react"
// import {  StyleSheet, Left, Image} from "react-native"
import { Actions } from "react-native-router-flux"
import { ProgressCircle } from 'react-native-svg-charts'
// import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Thumbnail, Body } from 'native-base';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';




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
        <Header />
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
              <Text>(1/20/2019)</Text>
              <Right>
                <Text>$500</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Text>Insurance          </Text>
              <Text>  (1/20/2019)</Text>
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
        <Button
        onPress={() => Actions.gas()}
        title="GAs"
        color="#FBF9F7"
        />
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
        }
        
        // const styles = StyleSheet.create({
          //   container: {
            //       backgroundColor: '#E5DEC0',
            //       flex: 1,
            //       width: 375,
            //   }
            // })
            
            
            
            export default Home