import React from "react"
import { StyleSheet } from "react-native"
import { Container, Text } from "native-base"
import { LineChart, Path, Grid } from "react-native-svg-charts"


const MpgChart = () => { 

    const data = [ 5, 15, 14, 16.2, 14, 17, 14 ]
    
    const Shadow = ({ line }) => (
        <Path
            key={"shadow"}
            y={2}
            d={line}
            fill={"none"}
            strokeWidth={4}
            stroke={"#4B8B9D"}
        />
    )

    return (   
      <Container style={styles.container}>
        <Text style={styles.text}>17.2 MPG</Text>
        <LineChart
            style={ { height: 200, width: 400 } }
            data={ data }
            svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={ { top: 20, bottom: 10 } }
        >
        <Grid/>
        <Shadow/>
        </LineChart>
      </Container>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#E5DEC0",
      textAlign: "center"
  },
  text: {
    textAlign: "center",
    color: "#4B8B9D",
    fontWeight: "bold",
    fontSize: 20
  }
})


export default MpgChart