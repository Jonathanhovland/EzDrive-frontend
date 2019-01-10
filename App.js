import React from 'react';
import { Button, View, Text } from 'react-native';
import { Router, Scene } from "react-native-router-flux"
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import SignUp from './src/components/Login/SignUp';
import Maint from './src/components/Maintenance.js/Maint';
import Summary from './src/components/Maintenance.js/Summary';



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene
            key="login"
            component={Login}
            title="Login"
            initial
          />
          <Scene
            key="home"
            component={Home}
            title="Home"
          />
          <Scene
            key="signup"
            component={SignUp}
            title="SignUp"
          />
          <Scene
            key="maint"
            component={Maint}
            title="Maint"
          />
          <Scene
            key="summary"
            component={Summary}
            title="Summary"
          />
        
        </Scene>
      </Router>
    )
  }
}











// class LoginScreen extends React.Component {
          //   static navigationOptions = {
          //     headerStyle: { backgroundColor: '#4B8B9D' },
          //   }
          //   render() {
          //     return (
          //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          //         <Login />
          //       </View>
          //     );
          //   }
          // }
          
          // const AppNavigator = createStackNavigator(
          //   {
          //     Login: LoginScreen,
          //     SignUp: SignUp,
          //     Home: Home
          //   },
          //   {
          //     initialRouteName: "Login"
          //   }
          // )
          