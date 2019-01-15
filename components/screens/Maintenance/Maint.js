import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button } from "react-native"
import { Actions } from "react-native-router-flux"
import OilChange from "./OilChange";
import Totals from "./Totals";
import { Container } from "native-base";

class Maint extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' }
    }
    render() {
        return (
            <Container style={{  backgroundColor: '#E5DEC0' }}>
            <OilChange style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5DEC0' }}/>
            <Totals />
            <Text >42,459</Text>

            </Container>
        )
    }
}


export default Maint