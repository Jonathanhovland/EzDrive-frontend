import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button, ProgressBar } from "react-native"
import { Actions } from "react-native-router-flux"
import Totals from "./Totals";
import { Container } from "native-base";
import ProgressBarExample from "./OilChange";
import OilChange from "./OilChange";

class Maint extends Component {

    static navigationOptions = {
        headerStyle: { backgroundColor: "#4B8B9D", color: "#fff"},
        headerLeft: (
            <Button
                onPress={() => Actions.home()}
                title="Home"
                color="#FBF9F7"
            />
        )
    }

    render() {
        return (
            <Container style={{  backgroundColor: '#E5DEC0' }}>
            <OilChange />
            <Totals />
          </Container>
        )
    }
}


export default Maint