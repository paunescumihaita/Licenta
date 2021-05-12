
import React, { Component,useState }   from 'react';
import { StyleSheet,Dimensions,CheckBox, Text, View, TextInput, TouchableOpacity, Image,ImageBackground, BackHandler} from 'react-native';
import axios from 'axios';
import './Global.js'
import Main from './Main.js'
import CalendarPicker from 'react-native-calendar-picker';

const w=Dimensions.get('window').width
const h= Dimensions.get('window').height

export default class Detalii extends Component {

  constructor(props) {  
    super(props); 
    this.state = {  cnp:global.cnp, nume:global.nume, prenume: global.prenume,salon: global.salon,telefon:global.telefon,adresa: global.adresa,  varsta:global.varsta, diagnostic:  global.diagnostic  }
    this.updateClick = this.updateClick.bind(this);
    this.backClick = this.backClick.bind(this);
    
  }
  backClick()
  {
    const { navigate } = this.props.navigation;
    navigate("Main");
  }

  updateClick(cnp,nume,prenume,telefon,adresa, salon,diagnostic)
  {

    const { navigate } = this.props.navigation;
    axios({
      method: 'post',
      url: 'https://l05.azurewebsites.net/pacienti/update',
      data: {
        partitionKey:cnp,
        rowKey:nume,
        prenume:prenume,
        telefon:telefon,
        adresa:adresa,
        salon:salon,
        diagnostic:diagnostic
      }
    }).then(res=>{alert(res.data); navigate('Main');} )
    .catch((error) =>  alert (error))
 .finally(() => { 
;
 
  
  
 });

    

  
    
    
  }

  render() {
    const { navigate } = this.props.navigation;
    var cnp=" ",nume,prenume,telefon,adresa, salon,diagnostic;
      
    return (
        <ImageBackground source={{uri: 'http://paunescumihai.ro/bc.png'}} style={styles.background}>
        <View  style={styles.bar}>
        <TouchableOpacity    onPress={()=>this.backClick()}  >
        <Image source={{uri:'http://paunescumihai.ro/home.png' }} style={styles.logo}/>

        </TouchableOpacity>

     


        <View  style={styles.bar1}>
      
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >NUME</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1} >{global.nume1}</Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >PRENUME</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}>{global.prenume1}</Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >CNP</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}> {global.cnp1} </Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >VARSTA</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}>{global.varsta1} </Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >TELEFON</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}>{global.telefon1}</Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >ADRESA</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}>{global.adresa1 }</Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >SALON</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}>{global.salon1} </Text>
        <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes} >DIAGNOSTIC</Text>
        </TouchableOpacity>
        <Text style={styles.TextDes1}>{global.diagnostic1 }</Text>
        </View>


        </View>
        <View  style={styles.rest}>
        <View style={styles.tag}>
        <TouchableOpacity  style={styles.LoginBtn2}  onPress={()=>this.pacientiClick("")}  >
        <Text style={styles.TextDes}>Afisare Tratamente</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.LoginBtn2}  onPress={()=>this.adaugareClick()}  >
        <Text style={styles.TextDes}>Adauga Tratamet</Text>
        </TouchableOpacity>

        </View>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />


        </View>
     
     

    
   
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    TextDes:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
       
     
      },
      TextDes1:{
        fontSize:18,
        textAlign:'left',
        fontWeight:'bold',
       // fontWeight:'bold',
       
     
      },
      tag:{
        marginTop:20,
        flexDirection: "row",
        alignItems: 'center',
    },
    rest:{
        height: h,
        width:w-210,
        flexDirection: "colon",
        alignItems: 'center',
    },
    bar:
    {
      height: h,
      width:210,
      backgroundColor:"#8EDAD9",
      marginLeft:0,
      flexDirection: "colon",
      alignItems: 'center',
     
      
      justifyContent: 'top',
    },
    bar1:
    {
      marginTop:30,
      flexDirection: "colon",
      alignItems: 'center',
     
      
      justifyContent: 'top',
    },


 
    background: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flexDirection: "row",
      alignItems: 'center',
      
     
    },  AdaugareBtn:{
        width:"150%",
        height:50,
        backgroundColor: "#FFF",
        borderRadius:5,
   
        justifyContent: 'center',
        marginTop:10
      
        
      },
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null
    },  LoginBtn1:{
      width:180,
      height:30,
      backgroundColor:"#FFF",
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
     
      
    },
    LoginBtn2:{
      width:180,
      height:30,
      backgroundColor:"#FFF",
      borderRadius:5,
    //  padding:15,
     marginLeft:60
     
      
    },
      background1:{
      
        height:"100%",
       width:"100%",
        flex: 1,
        position:'absolute',
      flexDirection: "column",
      alignItems: 'center',
      backgroundColor:'#000',
     
      
      
    
    
    
      },
      checkbox: {
        alignSelf: "center",
      },
     
      
      backmic:{
        
      height:"50%",
      width:"20%",
      position: 'center', 
     
      marginLeft:"35%",
      marginRight:"35%",
      marginTop:(0.2*h),
      marginBottom:(0.25*h),
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
    
      
      },
      input2:{
        width:"150%",
        height:"100%",
        backgroundColor:"#fff",
        padding:15,
        marginBottom:4,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 3,
      },
      logo:{
        height:50,
        width:50,
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
      TextDoc:{
        fontSize:26,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30
     
      },
      
    });
    
    
    