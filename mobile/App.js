//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LogIn from './LogIn'; 
import Main from './Main';
import PacientiDetail from './PacientiDetail'
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  LogIn: { screen: LogIn ,navigationOptions: {
    headerShown: null,
}, }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Main: { screen: Main, navigationOptions: {
      headerShown: null,
  }, }, 
  PacientiDetail: { screen: PacientiDetail, navigationOptions: {
    headerShown: null,
}, }, 
  },
  {
    initialRouteName: 'LogIn', 
  }
); 
export default createAppContainer(App);