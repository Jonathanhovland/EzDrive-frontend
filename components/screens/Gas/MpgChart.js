import React from "react"
import { StyleSheet } from "react-native"
import { Container, Text } from "native-base"
import { LineChart, Path, Grid } from "react-native-svg-charts"


const MpgChart = () => { 

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    
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
        <Text>Miles Per Gallon</Text>
        <LineChart
            style={ { height: 200 } }
            data={ data }
            svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={ { top: 20, bottom: 20 } }
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
  }
})


export default MpgChart