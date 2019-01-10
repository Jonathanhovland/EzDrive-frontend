import React, { Component } from "react"
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button} from "react-native"
import { Actions } from "react-native-router-flux"

const HomeForm = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5DEC0' }}>
        <Text>Current Miles: 42,120</Text>
        <Text>Gas Cost: $145.23</Text>
        <Text>Gas Amount: 68 Gallons</Text>
        <Text>Maintenance Cost: $45.45</Text>
        <Text>Monthly Total: $190.68</Text>
        <Button
          onPress={() => Actions.login()}
          title="Update"
          color="#FBF9F7"
        />
        <Text></Text>
    </View>
    )
}


export default HomeForm