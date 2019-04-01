import React, { Component } from 'react'
import Home from './Home'
import Menu from './Menu'
import Dashboard from './Dashboard'
import {View} from 'react-native'
import ShoppingCartScreen from './ShoppingCartScreen'
import {createBottomTabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

export default TabNavigator = createBottomTabNavigator({
  
  Home: Home,
  Menu: Menu,
  Checkout:ShoppingCartScreen,
  Profile: Dashboard,
  
  
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#1B4F72',
    inactiveTintColor: 'gray',
  },
}
)
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName ='home'
    
  } else if (routeName === 'Menu') {
    iconName = 'bars'
  }else if(routeName==='Profile'){
    iconName='user-circle'
  }else if(routeName==='Checkout'){
    iconName='shopping-cart'
  }

  return (<View style={{ width: 30, height: 30, margin: 5 }}>
    <Icon name={iconName} size={30} color={tintColor} />
    
  </View>);
};
