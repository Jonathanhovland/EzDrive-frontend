import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Router, Scene } from "react-native-router-flux"

import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import SignUp from './src/components/Login/SignUp';


class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#4B8B9D' },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUp,
    Home: Home
  },
  {
    initialRouteName: "Login"
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}