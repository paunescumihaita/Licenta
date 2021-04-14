
import { StatusBar } from 'expo-status-bar';
import React, { Component,useState }   from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image,ImageBackground,ScrollView, BackHandler} from 'react-native';
import axios from 'axios';
import './Global.js'
export default class PacientiDetail  extends React.Component 
{
    constructor(props) {  
        super(props); 
        this.state = {ora: '',tratament: [], id:[],isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
    }
  
  handleClick( a,b) {
    if(b=="1")
    {
      axios.get(`https://l05.azurewebsites.net/tratament/time/`+ a+'/0')
      .then(res => {
        const tratament = res.data;
       
        this.setState({ tratament });
       
     
        
      })
    }
    else{
      axios.get(`https://l05.azurewebsites.net/tratament/time/`+ a+'/1')
      .then(res => {
        const tratament = res.data;
       
        this.setState({ tratament });
 
      })
    }
     
  



    

  }
    componentDidMount()
    {
      axios.get('https://l05.azurewebsites.net/tratament/get/sort')
      .then(res => {
        const tratament = res.data;
       
        this.setState({ tratament });
  
      })
  

    }
   


    
    render(){
        
       // alert(  this.state.person.prenume);
       const a= this.state.person;
       const tr=this.state.tratament;
       const tru=this.state.isToggleOn;
       const a1=this.state.id;
       var ss=[];
       ss.push("0");
      
       
       var d=require('./Imagini/add2.png');
       var s=true;
     
     function f(c)
     {
      if(c=='0')
      return require('./Imagini/add2.png');
      else
      return require('./Imagini/delete1.png');
     }
   
      
      
    return (
        <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>
        <View style={styles.vv}>
       
     
      <ScrollView style={styles.scrol}>
      
      { tr.map(item=>{
          const a= item.idDoctor;
          const[ q1,q2]=item.timeAdministrare.split('T');
          const[ora,min]=q2.split(':');
         

          return(
            <View>
            {(() => {
                var d=ss.length-1;
              if ( ora.localeCompare(ss[d])){
                ss.push(ora);
               
            
                
                  return (
                    <TouchableOpacity  key={ora+1000} style={styles.Btn3}    >
                    <View style={styles.med} >
                     <Text style={styles.trat}>{(ora)}</Text>              
                     </View>
                    </TouchableOpacity>
                  )
              }
              
              return null;
            })()}
           
            <TouchableOpacity  key={item.partitionKey} style={styles.Btn1}    >
            <View style={styles.scvert}>
              <View style={styles.med} >
                <Text style={styles.trat}>{(item.idMedicament1)}</Text>
                <Text style={styles.trat}>{(item.idMedicament2)}</Text>
                <Text style={styles.trat}>{(item.idMedicament3)}</Text>
                
              </View>

              <View style={styles.ora} >
              <Text style={styles.trat}>{("Ora")}</Text>
          
              <Text style={styles.trat}>{(ora+":"+min)}</Text>
              </View>

              <View  style={styles.deleteadd}>
              <TouchableOpacity  onPress={()=>this.handleClick(item.partitionKey,item.icon)}  >
  
              <Image source={f(item.icon)} style={styles.add} />
              { console.log(ora+"  "+min)}
              </TouchableOpacity>
              </View>
          
            </View>
              </TouchableOpacity>
              </View>
              
             
          )
      })}
      </ScrollView>
        </View>
    </ImageBackground>);
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
    ic_utilizator:{
      width:150,
       height:150,
       marginLeft:1,
     
    
    },
    add:{
      width:60,
      height:60,
      
     
     
     
    },
    nume:{
      textTransform: 'uppercase',
      fontWeight: "bold",
      fontSize:25,
      alignItems: 'center',
    },
    diag: {
      fontSize:18,
      alignItems: 'center',
    },
    trat:{ fontSize:18,
      alignItems: 'center',
    },
    
    card:{
     // width:350,
     fontWeight: "bold",
     fontSize:25,
     alignItems: 'center',
     // padding:2,
  
    //  justifyContent: 'center',
  
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
    marginTop:20,
    marginLeft:10,
    
   },
   scvert:{
    flexDirection:'row',
  
    
   },

   vert:{
    marginTop:30,

    flexDirection:'row',
   },
   vert1:{
    //marginTop:30,\
    marginLeft:9,

    flexDirection:'row',
   },
   
     Btn1:{
     
      width:350, 
     // height:'100%',
      alignItems: 'center',
    //  height:70,
      borderRadius:10,
      backgroundColor:"#ffff",
      padding:10,
      marginVertical:5
    
      
    },
    ora:{
     
      marginLeft:60,
      marginRight:50,
      padding:10,
      alignItems: 'center',
    },
    Btn3:{
     
      width:350, 
     // height:'100%',
      alignItems: 'center',
    //  height:70,
      borderRadius:10,
      backgroundColor:"#92C7C7",
      padding:10,
      marginVertical:5
    
      
    },
    med:{
    marginLeft:9,
    alignItems: 'center',
    width:"31%"
    },
    Btn2:{
      width:60, 
      height:60,
      alignItems: 'center',
    //  height:70,
      borderRadius:10,
      backgroundColor:"#ffff",
      padding:10,
      
     
    
      
    },
    deleteadd:{
      marginRight:5

    },
    Btn:{
      width:65, 
      height:65,
      alignItems: 'center',
    //  height:70,
      borderRadius:10,
      backgroundColor:"#ffff",
      padding:10,
      marginVertical:5
    
      
    },
    varsta:{
      fontWeight: "bold",
       // width:350,
     fontSize:12,
     alignItems: 'center',
     // padding:2,

    },
    diagnostic:{
      fontWeight: "bold",
       // width:350,
     fontSize:20,
     alignItems: 'center',

    },
    scrol:{
      marginBottom:"2%",
      marginTop:"8%"
    }
  })
  
  