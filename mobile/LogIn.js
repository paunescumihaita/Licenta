import { StatusBar } from 'expo-status-bar';
import React, { Component,useState }   from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,ImageBackground, BackHandler} from 'react-native';
import axios from 'axios';




export default class LogIn extends Component {
  
  constructor(props) {  
    super(props);  
    this.state = {parola: ''};  
    this.state= {username: ''};
    this.handleClick = this.handleClick.bind(this);
  
    };

   
   handleClick(){
   
      var obj={PartitionKey :this.state.username, RowKey : this.state.parola };
      const { navigate } = this.props.navigation;

  
  
    axios.post(`https://l05.azurewebsites.net/Utilizatori/LogIn`, obj )
      .then(res => {
        
       


        //if(res.data==true)
        if(true==true)
        navigate('Main')
        else{ alert("Autentificare esuata");}
     
      })
    




    }
 

  render() {

 
   
 

    
   
  return (
  
    <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>
    <View style={styles.container}>
  
    <Image source={require('./Imagini/logo.png')} />
    <View style={styles.input}>
    <Image source={require('./Imagini/ic_user.png')} style={styles.ic_user} />
      <TextInput style={styles.input1} placeholder="Username"   onChangeText={(username) => this.setState({username})  }></TextInput>
      </View>
    
      <View style={styles.input}>
      <Image source={require('./Imagini/ic_password.png')} style={styles.ic_user} />
      <TextInput style={styles.input2} placeholder="Parola" onChangeText={(parola) => this.setState({parola})  }  ></TextInput>
      </View>
      <View  style={styles.Btn}>
      <TouchableOpacity  style={styles.LoginBtn}   onPress={this.handleClick } >
     
        <Text style={styles.TextBtn}>Autentificare</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      

    </View>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  // backgroundColor: '#fa1',
  flexDirection: "column",
  marginBottom:"36%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  welcome:{
    fontSize:30,
    textAlign:'center',
    margin:10,
    color:'#000',
    
  },
 
  LoginBtn:{
    width:"45%",
    
    backgroundColor:"#ffff",
borderRadius:9,
    padding:15
  
    
  },
  TextBtn:{
    fontSize:18,
    textAlign:'center'
 
  },
  Btn:{
   
   // flexDirection:"row",
    justifyContent:"space-between"
  },
  background:{
    width:"100%",
    height:"100%"


  },
  input:
  {
    flexDirection:"row",
    justifyContent:"space-between",
   
  },
  input1:{
    width:"70%",
    height:"75%",
    backgroundColor:"#ffff",
    padding:15,
    marginBottom:10 
  },
  input2:{
 
    width:"70%",
    height:"75%",
    backgroundColor:"#ffff",
    padding:15,
    marginBottom:10 ,
    
  },

ic_user:{
  width:50,
  height:"75%",
   backgroundColor:"#fff"

  
}

  
});


