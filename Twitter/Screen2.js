// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// export const AboutScreen = ({ navigation }) => {
// return (
// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Text>About Screen</Text>
// <Button
// title="Go to Home"
// onPress={() => navigation.navigate('Home')}
// />
// </View>
// );
// }

import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export const IsiTrend = () => {

  return(
  <View style={styles.containerOne}>
      <View style={styles.tweetcontainer}>

    <Image style={{ width: '100%', height: 200, resizeMode:'cover', marginVertical:5, overflow: 'hidden' }} source={require('./image/Squid-Game.png')}></Image>
    
</View>   
  </View>


  );

}
export const IsiTrendSecond = () => {

  return(
  <View style={styles.containerTwo}>
    <View style={styles.containerTwoTwo}>
    <Text style={styles.name}>Trends for you</Text>
    <Text></Text>
    </View>

    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>Gelay</Text>
    <Text style={styles.content}>19k Tweets</Text>
    <Text></Text>
    </View>
</View>
  );

}
export const IsiTrendThree = () => {

  return(
  <View style={styles.containerTwo}>
    
    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>#NontondiViu</Text>
    <Text style={styles.content}>Now We Are Breaking up EPs 3&4</Text>
    <Text></Text>
    </View>
</View>
  );

}
export const IsiTrendFour = () => {

  return(
  <View style={styles.containerTwo}>
    
    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>#chatwithmark</Text>
    <Text style={styles.content}>173K Tweets</Text>
    <Text></Text>
    </View>
</View>
  );

}
export const IsiTrendFive = () => {

  return(
  <View style={styles.containerTwo}>
    
    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>#HappinessEP6</Text>
    <Text style={styles.content}>20K Tweets</Text>
    <Text></Text>
    </View>
</View>
  );

}
export const IsiTrendSix = () => {

  return(
  <View style={styles.containerTwo}>
    
    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>Minions</Text>
    <Text style={styles.content}>27.8K Tweets</Text>
    <Text></Text>
    </View>
</View>
  );

}

export const IsiTrendSeven = () => {

  return(
  <View style={styles.containerTwo}>
    
    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>Kesalahan</Text>
    <Text style={styles.content}>8,726 Tweets</Text>
    <Text></Text>
    </View>
</View>
  );

}
export const IsiTrendEight = () => {

  return(
  <View style={styles.containerTwo}>
    
    <View style={styles.tweetcontainer}>
    <Text style={styles.tranding}>Trending in Indonesia</Text>
   
    </View>
   
   <View>
   <Text style={styles.date}>Gummy</Text>
    <Text style={styles.content}>14.5K Tweets</Text>
    <Text></Text>
    </View>
</View>
  );

}

const styles = StyleSheet.create({  //Style tulisan username, name
     
      containerOne:{
        flex:1,
        marginBottom: 10,
        borderBottomWidth: 0.2,
        
      },
      containerTwo:{
        flex:1,
        marginBottom: 10,
        borderBottomWidth: 0.2,
        
      },
      containerTwoTwo:{
        flex:1,
        marginBottom:10,
        borderBottomWidth: 0.2,
      },
      tweetcontainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
      marginBottom: 5,
      
      },
      name: {
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft: 8,
          color: 'black',
     
      },
      tranding: {
          marginHorizontal: 5,
          color: 'grey',
          fontWeight:'bold',
          
      },
     date:{
          marginHorizontal: 5,
          color: 'black',
          fontWeight: 'bold',
     },
     content:{
      marginHorizontal: 5,
       marginTop: 4,
       marginLeft: 5,
       lineHeight: 19,

      
     }
        
 }
 );
