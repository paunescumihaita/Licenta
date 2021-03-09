
import { StatusBar } from 'expo-status-bar';
import React, { Component,useState }   from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image,ImageBackground,ScrollView, BackHandler} from 'react-native';
import axios from 'axios';
import './Global.js'
export default class PacientiDetail  extends React.Component 
{
    constructor(props) {  
        super(props); 
        this.state = {person: '',tratament: [], id:[],isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
    }
  
  handleClick( a,b) {
    if(b=="1")
    {
      axios.get(`https://l05.azurewebsites.net/tratament/get/`+ a+'/'+'0')
      .then(res => {
        const tratament = res.data;
       
        this.setState({ tratament });
       
     
        
      })
    }
    else{
      axios.get(`https://l05.azurewebsites.net/tratament/get/`+ a+'/'+'1')
      .then(res => {
        const tratament = res.data;
       
        this.setState({ tratament });
 
      })
  }



    

  }
    componentDidMount()
    {
        axios.get(`https://l05.azurewebsites.net/pacienti/getId/`+ global.mihai)
      .then(res => {
        const person = res.data;
        this.setState({ person });
      })
    
console.log("initttt")
      axios.get(`https://l05.azurewebsites.net/tratament/get/`+ global.mihai)
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
      
       
       var d=require('./Imagini/add2.png');
       var s=true;
     
     function f(a)
     {
      if(a=='0')
      return require('./Imagini/add2.png');
      else
      return require('./Imagini/delete1.png');
     }
   
      
      
    return (
        <ImageBackground source={require('./Imagini/bc.png')} style={styles.background}>
        <View style={styles.vv}>
        <View style={styles.vert}>
        <Image source={require('./Imagini/ic_user.png')} style={styles.ic_utilizator} />
        <View style={styles.vv}>
        <Text style={styles.nume}>{(a.rowKey)}</Text>
        <Text style={styles.card}>{(a.prenume)}</Text>
        <View style={styles.vert1}>
        <TouchableOpacity  style={styles.Btn} onPress={()=>g()}    >
        {console.log("ff1")}
       <Text style={styles.varsta}>{("Varsta") }</Text>
       <Text style={styles.card}>{(a.varsta)}</Text>
      </TouchableOpacity>
      <Text >{("       ")}</Text>
      <TouchableOpacity  style={styles.Btn}    >
       <Text style={styles.varsta}>{("Sex") }</Text>
       <Text style={styles.card}>{(a.sex)}</Text>
      </TouchableOpacity>
      </View>
        </View>
        </View>
        <Text style={styles.diagnostic}>{("Diagnostic:") }</Text>
        <TouchableOpacity  style={styles.Btn1}    >
       <Text style={styles.diag}>{(a.diagnostic)}</Text>
      </TouchableOpacity>
      <Text style={styles.diagnostic}>{("Tratamente:") }</Text>
     
      <ScrollView style={styles.scrol}>
      
      { tr.map(item=>{
          const a= item.idDoctor;
          const[ q1,q2]=item.timeAdministrare.split('T');
          const[ora,min]=q2.split(':');
         

          return(
            <TouchableOpacity  style={styles.Btn1}    >
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
    med:{
    marginLeft:9,
    alignItems: 'center',
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
      marginBottom:310
    }
  })
  
  