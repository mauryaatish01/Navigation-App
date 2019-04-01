/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import Welcome from './Screens/Welcome'
import Login from './Comonents/Login'
import SignUp from './Comonents/SignUp'
import {Provider} from 'react-redux'
import store from './reducers/ShoppingCart'
import TabNavigator from './Comonents/AppNavgator'

class App extends Component{
  render() {
    return (
      <Provider store={store}><AppConatiner /></Provider>
    );
  }
}

const AppSwitchNavigator=createSwitchNavigator({
  Welcome:Welcome,
  Login:Login,
  SignUp:SignUp,
  Dashboard:TabNavigator
})



const AppConatiner = createAppContainer(AppSwitchNavigator);

export default App;


