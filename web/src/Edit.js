import React, { Component,useState }   from 'react';
import { StyleSheet,Dimensions,CheckBox, Text, View, TextInput, TouchableOpacity, Image,ImageBackground, BackHandler} from 'react-native';
import axios from 'axios';


const w=Dimensions.get('window').width
const h= Dimensions.get('window').height

export default class Edit extends Component {
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    var cnp=" ",nume,prenume,telefon,adresa, salon,diagnostic;
      
    return (
        <ImageBackground source={{uri: 'http://paunescumihai.ro/bc.png'}} style={styles.background}>
     
        <View  style={styles.backmic}>
 

        <Text style={styles.TextDoc}>Update Pacient </Text>
        
        <TextInput style={styles.input2} placeholder="CNP" flat="true" leftIcon={{ type: 'font-awesome', name: 'comment' }}   onChangeText={(CNP) =>{ cnp=CNP } }></TextInput>
        <TextInput style={styles.input2} placeholder="Nume"   onChangeText={(Nume) => nume=Nume  }></TextInput>
        <TextInput style={styles.input2} placeholder="Prenume"   onChangeText={(Prenume) => prenume=Prenume  }></TextInput>
        <TextInput style={styles.input2} placeholder="Telefon"   onChangeText={(Telefon) => telefon=Telefon }></TextInput>
        <TextInput style={styles.input2} placeholder="Adresa"   onChangeText={(Adresa) => adresa=Adresa }></TextInput>
        <TextInput style={styles.input2} placeholder="Numar Salon"   onChangeText={(Salon) => salon=Salon  }></TextInput>
        <TextInput style={styles.input2} placeholder="Diagnostic"  multiline={true}  onChangeText={(Diagnostic) => diagnostic=Diagnostic }></TextInput>
        <TouchableOpacity  style={styles.AdaugareBtn}  onPress={()=>this.submitPacientClick(cnp,nume,prenume,telefon,adresa, salon,diagnostic)}  >
          <Text style={styles.TextBtn}>Adaugare Pacient </Text>
        </TouchableOpacity>
       

         
        
      
  
  
  
        
         </View>
    
   
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
 


 
    background: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flexDirection: "column",
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
      TextDoc:{
        fontSize:26,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30
     
      },
      
    });
    
    
    