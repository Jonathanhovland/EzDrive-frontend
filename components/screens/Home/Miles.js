import React from "react"
import { StyleSheet } from "react-native"
import { Container, Content, Card, CardItem, Text } from "native-base"
import { Actions } from "react-native-router-flux"


const Miles = () =>  {
  return (
    <Container style={styles.container}>
      <Content>
        <Card>
          <CardItem style={styles.cardContainer}>
            <Text style={styles.cardText}>Miles</Text>
          </CardItem>
          <CardItem style={styles.cardContainer}>
            <Text style={styles.cardText}>42,459</Text>
          </CardItem>
          <CardItem footer button style={styles.button} onPress={() => Actions.login()}>
            <Text style={styles.cardText2}>Schedule Maintenance</Text>
          </CardItem>
          </Card>
      </Content>
    </Container>
  )
}
        
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5DEC0",
    marginTop: 0
  },
  cardContainer: {
    backgroundColor: "#76AFB8",
    justifyContent: "center", 
    alignItems: "center"  
  },
  cardText:{
    color: "#FBF9F7",
    fontSize: 20,
    fontWeight: "bold"
  },
  cardText2:{
    color: "#4B8B9D"
  },
  button: {
    backgroundColor: "#FBF9F7",
    justifyContent: "center", 
    alignItems: "center"  
  }
})

            
export default Miles