import React from "react"
import { Container, Content, Card, CardItem, Text, Left, Right } from "native-base"
import { StyleSheet } from "react-native"


const Totals = () =>  {
  return (
    <Container style={styles.container}>
      <Content>
        <Card>
          <CardItem style={styles.cardContainer}>
            <Left>
              <Text style={styles.cardText}>Last Maint.</Text>
            </Left>
            <Text style={styles.cardText}>10/13/18</Text>
            <Right>
              <Text style={styles.cardText}>$57.30</Text>
            </Right>
          </CardItem>
          <CardItem style={styles.cardContainer}>
            <Left>
              <Text style={styles.cardText}>Next Maint.</Text>
            </Left>
            <Text style={styles.cardText}>1245 Miles</Text>
            <Right>
              <Text style={styles.cardText}>$120.00</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}
        
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5DEC0",
    marginTop: -75
  },
  cardContainer: {
    backgroundColor: "#76AFB8",
    justifyContent: "center",
    alignItems: "center"  
  },
  cardText:{
    color: "#FBF9F7"
  }
})
            
            
export default Totals