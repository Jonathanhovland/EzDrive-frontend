import React from 'react';
// import { Button, View, Text } from 'react-native';
import { Router, Scene } from "react-native-router-flux"

import Login from './components/screens/Login/Login';
import Home from './components/screens/Home/Home';
import SignUp from './components/screens/SignUp/SignUp';
import Maint from './components/screens/Maintenance/Maint';
import Data from './components/screens/Data/Data';
import Gas from './components/screens/Gas/Gas';



export default class App extends React.Component {
  render() {
    return (
      <Router hideNavBar= "true">
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
            key="gas"
            component={Gas}
            title="Gas"
          />
          <Scene
            key="maint"
            component={Maint}
            title="Maint"
          />
          <Scene
            key="summary"
            component={Data}
            title="Summary"
          />
        
        </Scene>
      </Router>
    )
  }
}