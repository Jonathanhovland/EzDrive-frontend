import React from "react"
import { StyleSheet } from "react-native"
import { Container, Content, Card, CardItem, Text, Left, Right } from "native-base"


const GasHistory = ({gasHistory}) => {
  console.log("GasHistory", gasHistory)
  return gasHistory.map((gas, i) => {
  return (   
    <Container key={i} style={styles.container}>
      <Content>
        <Card >
          <CardItem style={styles.cardContainer}>
            <Text style={styles.cardText}>History</Text>
          </CardItem>
          <CardItem style={styles.cardContainer}>
            <Left>
              <Text style={styles.cardText}>{gas.date}</Text>
            </Left>
            <Text style={styles.cardText}>{gas.gas_amount}</Text>
            <Right>
              <Text style={styles.cardText}>{gas.cost}</Text>
            </Right>
            </CardItem>
          </Card>
      </Content>
    </Container>
  )
  })
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#E5DEC0"

  },
  cardContainer: {
    backgroundColor: "#AFD1D1",
    justifyContent: "center",
    alignItems: "center"  

  },    
  cardText:{
    color: "#FBF9F7",
    fontWeight: "bold"
  }
})


export default GasHistory