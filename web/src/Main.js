import { StatusBar } from 'expo-status-bar';
import React, { Component,useState }   from 'react';
import { StyleSheet,Dimensions, Text, View, TextInput, TouchableOpacity, Image,ImageBackground,ScrollView, BackHandler, ActivityIndicator} from 'react-native';
import ReactTable from "react-table";
import axios from 'axios'
import {Sidebar, InputItem,DropdownItem, Icon,Item, Logo, LogoText} from 'react-sidebar-ui'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'react-sidebar-ui/dist/index.css';
import SearchBar  from 'material-ui-search-bar';
import './Global.js'

var w= Dimensions.get('window').width;
var h= Dimensions.get('window').height;
const useStyles = makeStyles({
  table: {
//    minWidth: 650,
  },
});

function createData(cnp, nume, prenume,salon,telefon,adresa, varsta, diagnostic) {
  return { cnp, nume, prenume,salon,telefon,adresa,  varsta, diagnostic };
}


var rows=[];
var fs=""
var col="#fff"

export default class Main  extends React.Component 
{


  constructor(props) {  
    super(props); 
    this.state = { tratement:[],pacienti: [] ,isPacienti: true,isTratement: true, tip:'nimic' ,search:''  }
    
    this.pacientiClick = this.pacientiClick.bind(this);
    this.tratamentClick = this.tratamentClick.bind(this);
    this.allClick = this.allClick.bind(this);
    this.tabClick = this.tabClick.bind(this);
    this.adaugareClick = this.adaugareClick.bind(this);
    this.submitPacientClick = this.submitPacientClick.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.genClick = this.genClick.bind(this);
    this.ediClick = this.ediClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.detaliiClick = this.detaliiClick.bind(this);
   
   
  
  
}
detaliiClick(cnp,nume,prenume,salon,telefon,adresa, varsta, diagnostic)
{
  global.cnp1=cnp;
  global.nume1=nume;
  global.prenume1=prenume;
  global.salon1=salon;
  global.telefon1=telefon;
  global.adresa1=adresa;
  global.varsta1=varsta;
  global.diagnostic1=diagnostic;
  const { navigate } = this.props.navigation;
  navigate('Detalii');

}
deleteClick(cnp,nume)
{
  axios.delete('https://l05.azurewebsites.net/pacienti/delete/'+cnp+'/'+nume)  .then(res=>{alert(res.data)}
  
   
   )
 .catch((error) =>  alert (error))
 .finally(() => { 
  this.pacientiClick('');

  
  
 });

}
ediClick(cnp, nume, prenume,salon,telefon,adresa,  varsta, diagnostic){
 
  const { navigate } = this.props.navigation;
  global.cnp=cnp;
  global.nume=nume;
  global.prenume=prenume;
  global.salon=salon;
  global.telefon=telefon;
  global.adresa=adresa;
  global.varsta=varsta;
  global.diagnostic=diagnostic;

    navigate('Edit');
   
    this.pacientiClick('');
 
 
}
genClick()
{

  var listPacienti= this.state.pacienti;
  if(this.state.tip=='pacienti')
  {


   return(
    
    this.state.isPacienti  ? <ActivityIndicator/>:

     
      listPacienti.map(function(item, index){
        rows.push(createData(item.partitionKey,item.rowKey,item.prenume,item.salon,item.telefon,item.adresa, item.varsta,item.diagnostic))
      }
      )
   )
    }

}

searchClick()
{

  if(this.state.tip=='pacienti')
  return(
  <SearchBar 
  
       placeholder="Type Here..."
      onChange={(text)=>this.pacientiClick(text)}
     //  value={}
    
     />
  )

//this.setState({search:text})

//this.pacientiClick(text);

}
submitPacientClick(cnp,nume,prenume,telefon,adresa, salon,diagnostic)
{

  axios({
    method: 'post',
    url: 'https://l05.azurewebsites.net/pacienti/post',
    data: {
      partitionKey:cnp,
      rowKey:nume,
      prenume:prenume,
      telefon:telefon,
      adresa:adresa,
      salon:salon,
      diagnostic:diagnostic
    }
  }).then(res=>{alert(res.data)})
    
  
}



adaugareClick()
{
  
 
  this.setState({ tip: "adaugare" });
  


}
 tabClick(){

  if(this.state.tip=='pacienti'||this.state.tip=='adaugare' )
  {return (<View style={styles.bara}>
    <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.pacientiClick("")}  >
    <Text style={styles.TextBtn}>Afisare Pacienti</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.LoginBtn1}  onPress={()=>this.adaugareClick()}  >
    <Text style={styles.TextBtn}>Adaugare Pacient</Text>
  </TouchableOpacity>


 
  </View>
  )
  }
 
 


 }
 allClick(){

  var listPacienti= this.state.pacienti;
  const listTratament= this.state.tratement;

  
 





  if(this.state.tip=='pacienti')
  {


 
    

  
          
        return (
       <View style={styles.scrol}> 
     
          <TableContainer className={styles.table}  component={Paper}>
            <Table stickyHeader aria-label="sticky table"  >
         
              <TableHead >
                <TableRow>
                  <TableCell align="center">CNP</TableCell>
                  <TableCell align="center">Nume</TableCell>
                  <TableCell align="center">Prenume</TableCell>
                  <TableCell align="center">Varsta</TableCell>
                  <TableCell align="center">Diagnostic</TableCell>
                  <TableCell align="center">Actiuni</TableCell>
                </TableRow>
              </TableHead>
            
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.cnp}
                    </TableCell>
                    <TableCell align="center"> {row.nume}</TableCell>
                    <TableCell align="center">{row.prenume}</TableCell>
                    <TableCell align="center">{row.varsta}</TableCell>
                    <TableCell align="center">{row.diagnostic}</TableCell>
                   


                    <TableCell align="center">
               <View style={styles.actiuni1}>

            <TouchableOpacity  style={styles.actiuni2}  onPress={()=>this.deleteClick(row.cnp,row.nume)}  >
          <Text style={styles.TextBtn1}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.actiuni}  onPress={()=>this.ediClick(row.cnp,row.nume,row.prenume,row.salon,row.telefon,row.adresa,  row.varsta, row.diagnostic)}  >
          <Text style={styles.TextBtn1}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.actiuni3}  onPress={()=>this.detaliiClick(row.cnp,row.nume,row.prenume,row.salon,row.telefon,row.adresa,  row.varsta, row.diagnostic)}  >
          <Text style={styles.TextBtn1}>Detalii</Text>
        </TouchableOpacity>

        
        </View>
        </TableCell>
                  </TableRow>
                ))}
              </TableBody>
      
            </Table>
            { rows=[]}
          </TableContainer>
          </View>
      );
         
                

      }

     
   

       
    
  
  else   if(this.state.tip=='tratament') {

    return(this.state.isTratement  ? <ActivityIndicator/>:(
          
      listTratament.map(item=>{
       
      return ( <Text style={styles.TextDoc}>{item.rowKey} </Text>)
       })
       ) )
     }
     else
     if( this.state.tip=="adaugare")
     {

      var cnp="",nume,prenume,telefon,adresa, salon,diagnostic;
      
      return ( 






        <View style={styles.inputPacienti}>
        <TextInput style={styles.input2} placeholder="CNP"  onChangeText={(CNP) =>{ cnp=CNP } }></TextInput>
        <TextInput style={styles.input2} placeholder="Nume"   onChangeText={(Nume) => nume=Nume  }></TextInput>
        <TextInput style={styles.input2} placeholder="Prenume"   onChangeText={(Prenume) => prenume=Prenume  }></TextInput>
        <TextInput style={styles.input2} placeholder="Telefon"   onChangeText={(Telefon) => telefon=Telefon }></TextInput>
        <TextInput style={styles.input2} placeholder="Adresa"   onChangeText={(Adresa) => adresa=Adresa }></TextInput>
        <TextInput style={styles.input2} placeholder="Numar Salon"   onChangeText={(Salon) => salon=Salon  }></TextInput>
        <TextInput style={styles.input2} placeholder="Diagnostic"  multiline={true}  onChangeText={(Diagnostic) => diagnostic=Diagnostic }></TextInput>
        <TouchableOpacity  style={styles.AdaugareBtn}  onPress={()=>{this.submitPacientClick(cnp,nume,prenume,telefon,adresa, salon,diagnostic)} } >
          <Text style={styles.TextBtn}>Adaugare Pacient </Text>
        </TouchableOpacity>




        </View>
      

      )
     }
  else   
     {
      return (
    
     <View>  
    
             <Text style={styles.TextBtn}>{this.state.search} </Text>
   </View>
      );
       




     }




   
 }


 pacientiClick(text ) {
 

 //   this.state.tip=true;
  col='#000'
    this.setState({ isPacienti: true });
    var pacienti;
    axios.get('https://l05.azurewebsites.net/pacienti/get/'+text)
    .then(res => {
     
       pacienti=res.data;
       this.setState({pacienti :pacienti});
     
      
      
 
   })
    .catch((error) =>  alert (error))
    .finally(() => { 
      this.setState({ isPacienti: false });
     
     
    });
   
   this.state.tip='pacienti';

  }


  tratamentClick( ) {
 

    this.state.tip=true;

    this.setState({ isTratement: true });
    var pacienti;
    axios.get('https://l05.azurewebsites.net/tratament/get')
    .then(res => {
     
     const  tratement=res.data;
       this.setState({tratement :tratement});
     
      
      
 
   })
    .catch((error) =>  alert (error))
    .finally(() => { 
      this.setState({ isTratement: false });
     
     
    });
   
   this.state.tip='tratament';

  }
  componentDidUpdate()
  {
    w= Dimensions.get('window').width;
    h= Dimensions.get('window').height;
 
 
  }
   componentDidMount()
  {

    

   
  

  }
 
  render(){
  
  
 

 
    return(
        <ImageBackground source={{uri: 'http://paunescumihai.ro/bc.png'}} style={styles.background}>
        
        <View style={styles.bar}>
        <View style={styles.user}>
        <Image source={{uri:'http://paunescumihai.ro/logo.png' }} style={styles.logo}/>
        <View style={styles.doctor}>
        <Text style={styles.TextDoc}>Dr. PAUNESCU </Text>
        <Text style={styles.TextDoc}>Mihaita </Text>
        </View>
        </View>



        <TouchableOpacity  style={styles.LoginBtn}  onPress={()=>this.pacientiClick("")}  >
          <Text style={styles.TextBtn}>Pacienti</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.LoginBtn}  onPress={()=>this.tratamentClick()}  >
          <Text style={styles.TextBtn}>Comenzi</Text>
        </TouchableOpacity>


        <TouchableOpacity  style={styles.LoginBtn}  onPress={()=>this.tratamentClick()}  >
          <Text style={styles.TextBtn}>Medicamente</Text>
        </TouchableOpacity>

        </View>



        <View style={styles.con} >
       
       {this.tabClick()}
       <View style={styles.search}>


       {this.searchClick() }
       </View>
      




     




        <View style={styles.container1}>
       
       
    <View>
        {this.genClick()}
        {this.allClick()}
     

        </View>
        
        
     
    

        </View>




  
        </View>
      
        </ImageBackground>



    )
  
}



}



const styles = StyleSheet.create({
  search:{
marginTop:10,
marginLeft:10,
marginRight:10,
marginBottom:5,
  },
  inputPacienti:
  {
    flexDirection: "colon",
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
    
  },
  bara:{
    width: w-230,
    height:  50,
  
    marginTop:0,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'

  },
  tot:{
    marginTop:10,
    height: h-10,
  },
  con:{
    marginTop:0,
    flexDirection: "colon",
    height:h,
      
    justifyContent: 'top',
  },
  bar1:
  {
   
    backgroundColor:"#000",

  //  justifyContent: 'center',
  },

  table: {
  
  },
  scrol:{
    width: w-230,
  //  marginTop:10,
    
    marginLeft:10,
    marginRight:10,


    height:h-160,
  },

  pre:{
    height:20,
    width:180,
    fontSize:18,
    fontWeight:'bold'
  },
  crt:{
  //  backgroundColor:"#000",
    height:20,
    width:50,
    fontSize:18,
    fontWeight:'bold'

  },
  cnp:{
//    backgroundColor:"#000",
    height:20,
    width:160,
    fontSize:18,
    fontWeight:'bold'
  },


    pac:{
      flexDirection: "row",
      backgroundColor:"#fff",
      marginTop:5
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
    background:{
      width:w,
      height: h,
    flex: 1,
    position:'absolute',
    flexDirection: "row",
    alignItems: 'center',
   
    
    
  
  
  
    },
    doctor:{
      flexDirection: "colon",
      alignItems: 'center',
      marginBottom:10,
      marginTop:10
    },

    user:{
      flexDirection: "colon",
      alignItems: 'center',
      marginTop:20
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
      height:120,
      width:120,
      marginTop:2
  
    },
    input:
    {
      flexDirection:"row",
    //  justifyContent:"space-between",
     
    },
    container1: {
      flex: 1,
  
    flexDirection: "row",
  marginTop:2,
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
      width:"100%",
      height:"100%",
      backgroundColor:"#fff",
      padding:15,
      marginBottom:4,
      borderColor: "#000",
      borderWidth: 1,
      borderRadius: 3,
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
    LoginBtn:{
      width:180,
      height:30,
      backgroundColor: col,
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
      marginTop:10
    
      
    },

    actiuni:{
      width:80,
      height:15,
      backgroundColor: "#00FF00",
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
      marginTop:2
    
      
    },
    actiuni3:{
      width:80,
      height:15,
      backgroundColor: "#FFA500",
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
      marginTop:2
    
      
    },
    actiuni2:{
      width:80,
      height:15,
      backgroundColor: "#FF0000",
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
      marginTop:1
    
      
    },
    actiuni1:{
      flexDirection: "coloc",
    //  padding:15,
     // marginBottom:10,
      marginTop:1
    
      
    },
    AdaugareBtn:{
      width:"150%",
      height:50,
      backgroundColor: col,
      borderRadius:5,
 
      justifyContent: 'center',
      marginTop:10
    
      
    },
    LoginBtn1:{
      width:180,
      height:30,
      backgroundColor: col,
      borderRadius:5,
    //  padding:15,
     // marginBottom:10,
      marginTop:10,
      marginLeft:50,
    
      
    },
    TextBtn:{
      fontSize:18,
      textAlign:'center',
      fontWeight:'bold',
     
   
    },
    TextBtn1:{
      fontSize:14,
      textAlign:'center',
      fontWeight:'bold',
     
   
    },
    TextDoc:{
      fontSize:18,
      textAlign:'center',
      fontWeight:'bold'
   
    },



    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
    
  });
  
  
  