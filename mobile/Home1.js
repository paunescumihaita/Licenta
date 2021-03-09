
import React, { Component, useState } from 'react';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { color, concat } from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import './Global.js'



export default  function Home({ navigation }) {
    const [search, setSearch] = useState('');
    const [people, setpeople]=useState([]);
    
    
    axios.get(`https://l05.azurewebsites.net/tratament/icon`)
          .then(res => {
             //persons = res.data;
            
             setpeople(res.data);
          })
         
      return (
        <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>
        <View style={styles.vv}>
      
           <View style={styles.bcvi}>
         <ScrollView>
      
           {
            people.map(item=>{
              const a= item.prenume;
             
               return (
             <View key={item.partitionKey} >
             <TouchableOpacity  style={styles.Btn}  // onPressIn={()=>g(item.partitionKey)}  
             >
           
             <Text style={styles.card}>{(item.rowKey +" "+item.prenume) }</Text>
          
             <Text style={styles.card}>{(item.diagnostic)}</Text>
           
            </TouchableOpacity>
    
           
             
             </View>
               )
           })}
         </ScrollView>
         <TouchableOpacity  style={styles.Btn}  // onPressIn={()=>g(item.partitionKey)}  
         >
           
           <Text style={styles.card}>{("Plaseaza Tratament") }</Text>
        
        
         
          </TouchableOpacity>
    </View>
        </View>
        </ImageBackground>
      );
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
    marginTop:30
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
  