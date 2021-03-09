
import React, { Component, useState } from 'react';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { color, concat } from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import './Global.js'
import Home from './Home1.js'
import d from './Screen1.js'

export default class Main extends React.Component {

  constructor(props) {  
    super(props);  
    
  }
  
  render() {
    const { navigate } = this.props.navigation;

const Tab = createBottomTabNavigator();
function l(n)
{
return d(navigate);
}

    function SettingsScreen({ navigation }) {
      return (
        <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
          <Button title="Go to Home" />
        </View>
        </ImageBackground>
      );
    }
    return (

    <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>

      <View style={styles.container}>
      
        
        <NavigationContainer background="#000">

      <Tab.Navigator 
    
        initialRouteName="Feed"
      
        tabBarOptions={{
          activeTintColor: '#1FD2D1',
          
        }
        }>
        <Tab.Screen
       
          name="HomeStack"
          style={styles.taa}
          
          component={l}
        //  onPress={this.handleClick}

          options={{       
            tabBarLabel: 'Pacienti',
           
            tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source=
                  {require('./Imagini/pacienti.png')} style={styles.ic_user}
         
              />
            );
            
            }
            
          }}  />
        <Tab.Screen
          name="home"
          
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Tratament Ore',
            tabBarVisible:true,
            tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source=
                  {require('./Imagini/clock.png')} style={styles.clock}
         
              />
            );
            
            }
           
          }} />
           <Tab.Screen
          name="SettingsStack"
          
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarVisible:true,
            tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source=
                  {require('./Imagini/home.png')} style={styles.ic_user}
         
              />
            );
            
            }
           
          }} />
           <Tab.Screen
          name="SettingsStack1"
          
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Setari',
            tabBarVisible:true,
            tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source=
                  {require('./Imagini/set.png')} style={styles.set}
         
              />
            );
            
            }
           
          }} />
           <Tab.Screen
          name="SettingsStack2"
          
          component={SettingsScreen}
          options={{
            tabBarLabel: 'About',
            tabBarVisible:true,
            tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source=
                  {require('./Imagini/about.png')} style={styles.set}
         
              />
            );
            
            }
           
          }} />
      </Tab.Navigator>
    </NavigationContainer>
      </View>
      </ImageBackground>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1
    
 //   alignItems: 'center',
   // justifyContent: 'center',
  },
  background:{
    width:"100%",
    height:"100%"
  },
  clock:{
    width:35,
    height:35,
    marginBottom:"1%"
  },
  set:{
    width:35,
    height:35,
    marginBottom:"1%"
  },
  ic_user:{
    width:39,
     height:39,
     marginBottom:"1%"
   
  
  },
  taa:{
    marginBottom:8
  },
  card:{
   // width:350,
    
   alignItems: 'flex-start',
   // padding:2,

  //  justifyContent: 'center',
     fontSize:16,
  //  marginBottom:10 
  },
  bcvi:{
     justifyContent: 'center',width:"100%",height:"100%", alignItems: 'center',
  },
  bar:{
   
   
   // alignItems: 'center',
   backgroundColor :"#fff",
 color:"#fff"
   // marginVertical:5
  },
 vv:{
  marginTop:20
 },
 
   Btn:{
    width:350, 
    alignItems: 'center',
  //  height:70,
    borderRadius:10,
    backgroundColor:"#ffff",
    padding:10,
    marginVertical:5,
    
  
    
  },
})

