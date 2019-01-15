import React from "react"
import { Container, Content, Card, CardItem, Text, Left, Right } from "native-base"
import { StyleSheet } from "react-native"
import AverageChart from "./AverageChart"


const SummaryData = () =>  {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem style={styles.cardContainer}>
              <Left>
                <Text style={styles.cardText}>Payments</Text>
              </Left>
              <Right>
                <Text style={styles.cardText}>$10,203.01</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>
                <Text style={styles.cardText}>Insurance</Text>
              </Left>
              <Right>
                <Text style={styles.cardText}>$4000.08</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>
                <Text style={styles.cardText}>Registration</Text>
              </Left>
              <Right>
                <Text style={styles.cardText}>$900.76</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>
                <Text style={styles.cardText}>Maintenance</Text>
              </Left>
              <Right>
                <Text style={styles.cardText}>$2300.98</Text>
              </Right>
             </CardItem>
             <CardItem style={styles.cardContainer}>
              <Left>
                <Text style={styles.cardText}>Gas</Text>
              </Left>
              <Right>
                <Text style={styles.cardText}>$3,203.01</Text>
              </Right>
             </CardItem>
            <CardItem style={styles.cardContainer}>
              <Left>
                <Text style={styles.cardText2}>Total</Text>
              </Left>
              <Right>
                <Text style={styles.cardText2}>$21,203.01</Text>
              </Right>
             </CardItem>
           </Card>
        <AverageChart />
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
    fontSize: 20
  },
  cardText2:{
    color: "#FBF9F7",
    fontSize: 25,
    fontWeight: "bold"
  }  
})
            
            
export default SummaryData