
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Main from './Main';
import LogIn from './LogIn'; 


const App = createStackNavigator({

  LogIn: { screen: LogIn ,navigationOptions: {
    headerShown: null,
}, }, 
  Main: { screen: Main, navigationOptions: {
    headerShown: null,
}, }, 

 

  },
  {
    initialRouteName: 'LogIn', 
  }
); 
export default createAppContainer(App);