import { StatusBar } from 'expo-status-bar';
import React, { Component,useState }   from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,ImageBackground, BackHandler} from 'react-native';


export default class Main  extends React.Component 
{


  constructor(props) {  
    super(props); 
    this.state = {person: 0 , aa: <Text style={styles.TextDoc}>Mihaita </Text>}
    this.handleClick = this.handleClick.bind(this);
}



handleClick( ) {
 
    const person =this.state.person+1;
    this.setState({ person });
   // const aa=<Text style={styles.TextDoc}>Mihrffffffffaita </Text>



    const aa = ( <View> <Text style={styles.TextDoc}>Mihrffffffffaita </Text>
      <Text style={styles.TextDoc}>Mihrfffffhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfffaita </Text>
         <Text style={styles.TextDoc}>Mihrffffffffaita </Text>
         <Text style={styles.TextDoc}>Mihrffffffffaita </Text></View>);
      
      
      


    this.setState({ aa });
  
  }
 
   componentDidMount()
  {
 
   alert("1")
 

  }

  render(){
  
    var aa=  this.state.aa;
  
    const a= this.state.person;
    const Home = () =>{return ( <Text style={styles.TextDoc}>Homhhhhe</Text>)};

    return(
        <ImageBackground source={{uri: 'http://paunescumihai.ro/web/bc.png'}} style={styles.background}>
        <View style={styles.bar}>
        <View style={styles.user}>
        <Image source={{uri:'http://paunescumihai.ro/web/ic_user.png' }} style={styles.logo}/>
        <View style={styles.doctor}>
        <Text style={styles.TextDoc}>Dr. PAUNESCU </Text>
        <Text style={styles.TextDoc}>Mihaita </Text>
        </View>
        </View>



        <TouchableOpacity  style={styles.LoginBtn}  onPress={()=>this.handleClick()}   >
          <Text style={styles.TextBtn}>Pacienti</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.LoginBtn}   >
          <Text style={styles.TextBtn}>Comenzi</Text>
        </TouchableOpacity>

        </View>
        <View style={styles.container}>
        <Text style={styles.TextDoc}>{a} </Text>
        {aa}
        </View>
        </ImageBackground>



    )
    function f()
{

    return( <Text  style={styles.TextBtn}>ddddfgdfgdgergertgddd</Text>)
  
}
}



}



const styles = StyleSheet.create({



    bar:
    {
      height:678,
      width:210,
      backgroundColor:"#8EDAD9",
      marginLeft:0,
      flexDirection: "colon",
      alignItems: 'center',
    //  justifyContent: 'center',
    },
    background:{
    height:678,
    width:1422,
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
   
    
    
  
  
  
    },
    doctor:{
      flexDirection: "colon",
      alignItems: 'center',
    },

    user:{
      flexDirection: "row",
      alignItems: 'center',
      marginTop:40
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
      height:80,
      width:80,
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
      width:180,
      height:30,
      backgroundColor: "#8EDAD9",
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
      marginTop:10
    
      
    },
    TextBtn:{
      fontSize:18,
      textAlign:'center',
      fontWeight:'bold'
   
    },
    TextDoc:{
      fontSize:18,
      textAlign:'center',
      fontWeight:'bold'
   
    },
    
  });
  
  
  