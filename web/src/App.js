
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Main from './Main.js';
import LogIn from './LogIn'; 
import Edit from './Edit';


const App = createStackNavigator({

  LogIn: { screen: LogIn ,navigationOptions: {
    headerShown: null,
}, }, 
  Main: { screen: Main, navigationOptions: {
    headerShown: null,
}, }, 
  Edit: { screen: Edit, navigationOptions: {
  headerShown: null,
}, },

 

  },
  {
    initialRouteName: 'LogIn', 
  }
); 
export default createAppContainer(App);