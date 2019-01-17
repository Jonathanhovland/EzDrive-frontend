import React from "react"
import { StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"
import { Container, CardItem, Text } from "native-base"
import ProgressBar from "react-native-progress/Bar"


const OilChange = () => {
  return (
    <Container style={styles.container}>
      <ProgressBar progress={0.8} width={370} height={15} style={styles.progressBar}/>
        <Text style={ styles.text2}> Oil Change </Text>
      <ProgressBar progress={0.3} width={370} height={15} style={styles.progressBar}/>
        <Text style={ styles.text2}> Tire Rotation </Text>
      <ProgressBar progress={0.6} width={370} height={15} style={styles.progressBar}/>
        <Text style={ styles.text2}> 60 K </Text>
      <ProgressBar progress={0.5} width={370} height={15} style={styles.progressBar}/>
        <Text style={ styles.text2}> Tires </Text>
      <ProgressBar progress={0.5} width={370} height={15} style={styles.progressBar}/>
        <Text style={ styles.text2}> Filters</Text>
      <CardItem footer button style={styles.button} onPress={() => Actions.login()}>
        <Text style={styles.buttonText}>Track New Maintenance</Text>
      </CardItem>
    </Container>
  )
}
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5DEC0",
    height: 200,
    marginBottom: 50
  },
  progressBar: {
    backgroundColor: "#FBF9F7",
    color: "green",
    textAlign: "center",
    marginTop: 10,
    borderColor: "#FBF9F7"
  },
  text2: {
    color: "#4B8B9D",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    justifyContent: "center", 
    alignItems: "center",
    color: "#4B8B9D",
    fontSize: 20  
  }
})
            
            
export default OilChange