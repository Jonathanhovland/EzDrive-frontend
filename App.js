import React, { Component } from "react"

import { Router, Scene, titleStyle } from "react-native-router-flux"

import Login from './components/screens/Login/Login';
import Home from './components/screens/Home/Home';
import SignUp from './components/screens/SignUp/SignUp';
import Maint from './components/screens/Maintenance/Maint';
import Data from './components/screens/Data/Data';
import Gas from './components/screens/Gas/Gas';



class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true" >
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            initial
          />
          <Scene
            key="home"
            component={Home}
          />
          <Scene
            key="signup"
            component={SignUp}
          />
          <Scene
            key="gas"
            component={Gas}
          />
          <Scene
            key="maint"
            component={Maint}
          />
          <Scene
            key="data"
            component={Data}
            />
        </Scene>
      </Router>
    )
  }
}


export default App