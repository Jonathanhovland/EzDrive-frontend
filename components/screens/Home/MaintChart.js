import React from "react"
import {  StyleSheet, Text, View} from "react-native"
import { ProgressCircle } from "react-native-svg-charts"


const MaintChart = () => {
  return (
    <View>
      <Text style={styles.text}>Next Maintenance</Text>
      <ProgressCircle
        style={styles.container}
        progress={ 0.7 }
        progressColor={"#4B8B9D"}
        startAngle={ -Math.PI * 0.8 }
        endAngle={ Math.PI * 0.8 }
      /> 
      <Text style={styles.text2}>1245 Miles</Text>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5DEC0",
    height: 200,
    marginBottom: 0,
    marginTop: 0
  },
  text: {
    color: "#4B8B9D",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 3,
    fontWeight: "bold",
    fontSize: 18
  },
  text2: {
    color: "#4B8B9D",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 18
  }
})
            

export default MaintChart