import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { FooterOne, FooterTwo, FooterThree } from './footer';




export const ScreenUtama = () => {

  return(
  <View style={styles.containerOne}>
    {/* <Text style={styles.name}>Jerome Polin Sijabat</Text> */}
    <View style={styles.tweetcontainer}>
    <Text style={styles.name}>Jerome Polin Sijabat</Text>
    <Image style={{ width: 15, height: 15, marginTop: 2, marginRight:2, marginLeft: 2}} source={{ uri :'https://img.icons8.com/color/48/000000/verified-badge.png'}}/>
    <Text style={styles.username}>@jerome polin</Text>
    <Text style={styles.date}>.1d</Text>
    <Image style={{ width: 14, height: 14, marginTop:2, marginRight: 5}} source={{ uri : 'https://img.icons8.com/material-rounded/24/000000/menu-2.png'}}/>
    
    
    </View>
   
   <View>
    <Text style={styles.content}>Terkadang, Masalah Hidup Menekan Kita untuk jatuh. Tapi, untuk bangkit atau tidak, itu pilihan Kita  </Text>
    <Image style={{ width: '100%', height: 400, resizeMode:'cover', marginVertical:5, overflow: 'hidden'}} source={require('./image/Squid-Game.png')}></Image>
    
    </View>
    <FooterOne/>
  </View>


  );

}

export const ScreenUtamaSecond = () => {

  return(
  <View style={styles.containerTwo}>
    {/* <Text style={styles.name}>Jerome Polin Sijabat</Text> */}
    <View style={styles.tweetcontainer}>
    {/* <Image source={require('./image/jefri-nichol.png')} style={{ borderRadius: 50, width: 55, height: 55, marginLeft: 20, 
  }}
/> */}
    <Text style={styles.name}>Jefri Nichol</Text>
    <Image style={{ width: 15, height: 15, marginTop: 2, marginRight:-5, marginLeft: 2}} source={{ uri :'https://img.icons8.com/color/48/000000/verified-badge.png'}}/>
    <Text style={styles.username}>@jefri nichol</Text>
    <Text style={styles.date}>.1d</Text>
    <Image style={{ width: 14, height: 14, marginTop:2, marginRight: 5, marginLeft:70}} source={{ uri : 'https://img.icons8.com/material-rounded/24/000000/menu-2.png'}}/>
    
    </View>
   
   <View>
    <Text style={styles.content}>Kalau Chat itu dibales, jangan diread doang. emgnya Koran -_- </Text>
     
    </View>
   
    <FooterTwo/>
    
  
  </View>


  );

}

export const ScreenUtamaThird = () => {

  return(
  <View style={styles.containerTwo}>
    {/* <Text style={styles.name}>Jerome Polin Sijabat</Text> */}
    <View style={styles.tweetcontainer}>
    {/* <Image source={require('./image/jefri-nichol.png')} style={{ borderRadius: 50, width: 55, height: 55, marginLeft: 20, 
  }}
/> */}
    <Text style={styles.name}>Jerome Polin Sijabat</Text>
    <Image style={{ width: 15, height: 15, marginTop: 2, marginRight:2, marginLeft: 2}} source={{ uri :'https://img.icons8.com/color/48/000000/verified-badge.png'}}/>
    <Text style={styles.username}>@jerome polin</Text>
    <Text style={styles.date}>.1d</Text>
    <Image style={{ width: 14, height: 14, marginTop:2, marginRight: 5}} source={{ uri : 'https://img.icons8.com/material-rounded/24/000000/menu-2.png'}}/>
    
    </View>
   
   <View>
    <Text style={styles.content}>Terkadang, Masalah Hidup Menekan Kita untuk jatuh. Tapi, untuk bangkit atau tidak, itu pilihan Kita  </Text>
    <Image style={{ width: '100%', height: 400, resizeMode:'cover', marginVertical:5, overflow: 'hidden'}} source={require('./image/Squid-Game.png')}></Image>  
    </View>
   
    <FooterThree/>
    
  
  </View>


  );

}



const styles = StyleSheet.create({  //Style tulisan username, name
     
      containerOne:{
        flex:1,
        marginBottom: 30,
        // backgroundColor: 'yellow',
      },
      containerTwo:{
        flex:1,
        marginBottom: 30,
        // backgroundColor: 'red',
      },
      tweetcontainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
      //  backgroundColor: 'powderblue',
      },
      name: {
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft: 8,
      },
      username: {
          marginHorizontal: 5,
          color: 'grey',

          
      },
     date:{
          marginHorizontal: 5,
          color: 'grey',
     },
     content:{
      marginHorizontal: 5,
       marginTop: 3,
       marginLeft: 8,
       lineHeight: 19,
      
     }
    

  

      
 }
 );
