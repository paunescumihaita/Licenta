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
  
    
    
      
  
          //if(res.data==true)
          if(true==true)
          navigate('Main')
          else{ alert("Autentificare esuata");}
       
       
      
  
  
  
  
      }

  
  
    




    
 

  render() {

 
   

    
   
  return (
  
    <ImageBackground source={{uri: 'http://paunescumihai.ro/web/bc.png'}} style={styles.background}>
     
      <View  style={styles.backmic}>
      <Image source={{uri:'http://paunescumihai.ro/web/logo.png' }} style={styles.logo}/>
     
 
          <TextInput style={styles.input1} placeholder="Username" ></TextInput>
    
      
    
          <TextInput style={styles.input1} placeholder="Parola"     ></TextInput>
       
        <TouchableOpacity  style={styles.LoginBtn} onPress={this.handleClick }   >
     
          <Text style={styles.TextBtn}>Autentificare</Text>
        </TouchableOpacity>

    



      
       </View>
  
 
    </ImageBackground>
 

  );
}
}

const styles = StyleSheet.create({
 
  background:{
  height:678,
  width:1422,
  flex: 1,
  flexDirection: "column",
  alignItems: 'center',
 
  
  



  },
 
  
  backmic:{
    
  height:308,
  width:422,
  position: 'center', 
  backgroundColor:'#fff',
  marginLeft:500,
  marginRight:500,
  marginTop:150,
  marginBottom:185,
  flex: 1,
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',

  
  },
  logo:{
    height:150,
    width:150,
    marginTop:2

  },
  input:
  {
    flexDirection:"row",
  //  justifyContent:"space-between",
   
  },
  container: {
    flex: 1,

  flexDirection: "column",

    alignItems: 'center',
    justifyContent: 'center',
  },
  ic_user:{
    width:50,
    height:50,
   // marginRight:1,
    backgroundColor:"#fff",
    
  
    
  },
  input1:{
    width:"58%",
    height:50,
    backgroundColor:"#fff",
    padding:15,
    marginBottom:4,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 3,
  },
  LoginBtn:{
    width:"58%",
    height:50,
    backgroundColor: "#ADE6E3",
    borderRadius:5,
    padding:15,
    marginBottom:20,
    marginTop:10
  
    
  },
  TextBtn:{
    fontSize:18,
    textAlign:'center'
 
  },
  
});


