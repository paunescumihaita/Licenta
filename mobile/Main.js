
import React, { Component, useState } from 'react';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

export default class Main extends Component {

  constructor(props) {  
    super(props);  
    this.handleClick = this.handleClick.bind(this);
    this.customFunction = this.customFunction.bind(this);
  }
  customFunction()
  {
    console.log("hgfdhsv");
  }

  handleClick() {
    axios.get(`https://l05.azurewebsites.net/Utilizatori/Get`)
      .then(res => {
        const persons = res.data;
        persons.forEach(a => {
          console.log(a.partitionKey)
        });
      
        this.setState({ persons });
      })
  }

  render() {
    const Tab = createBottomTabNavigator();

 function HomeScreen({ navigation }) {
const [people, setpeople]=useState([
  {name: "grsd", age:"22"},
  {name: "Mifdfhai", age:"23"},
  {name: "Mifgvdfgvhai", age:"24"},
  {name: "Misdvsdfvhai", age:"25"},
  {name: "Miffdddhai", age:"26"},
  {name: "Mihfvfvdai", age:"27"},  {name: "Mihai", age:"29"},
  {name: "Mihai", age:"28"},
]);




  return (
    <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>
    <View style={styles.bcvi}>
     
     <ScrollView>
       {
         people.map(item=>{
           return (
         <View key={item.age} >
         <TouchableOpacity  style={styles.Btn}   >
     
         <Text style={styles.card}>{item.name}</Text>
       
        </TouchableOpacity>
         
         </View>
           )
       })}
     </ScrollView>


    </View>
    </ImageBackground>
  );
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
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
       
          name="HomeStack"
          
          component={HomeScreen}
         // onPress={this.handleClick}

          options={{       
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source=
                  {require('./Imagini/ic_password.png')} style={styles.ic_user}
         
              />
            );
            
            }
            
          }}  />
        <Tab.Screen
          name="SettingsStack"
          
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarVisible:true,
           
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
    flex: 1,
    
 //   alignItems: 'center',
   // justifyContent: 'center',
  },
  background:{
    width:"100%",
    height:"100%"
  },
  ic_user:{
    width:39,
     height:39,
  
  },
  card:{
   // width:350,
    
   alignItems: 'center',
    padding:2,

    justifyContent: 'center',
     fontSize:16,
  //  marginBottom:10 
  },
  bcvi:{
    flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:"9%",width:"100%",height:"100%"
  },
   Btn:{
    width:350, alignItems: 'center',
  //  height:70,
    borderRadius:10,
    backgroundColor:"#ffff",
    padding:10,
    marginVertical:5
  
    
  },
})

