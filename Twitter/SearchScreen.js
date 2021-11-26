
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';


import AppSearch from './Screen1';
import { IsiTrend, IsiTrendSecond, IsiTrendThree, IsiTrendFour, IsiTrendFive, IsiTrendSix, IsiTrendSeven, IsiTrendEight  } from './Screen2';



const  SearchScreen = () => {
    return(
      
          <View style={styles.container}>
          {/* <View> */}
          <ScrollView>
            <AppSearch/>
               
               <IsiTrend/>
              <IsiTrendSecond/>
              <IsiTrendThree/>
              <IsiTrendFour/>
              <IsiTrendFive/>
              <IsiTrendSix/>
              <IsiTrendSeven/>
              <IsiTrendEight/>
           
               </ScrollView>
            </View>
        
    );
    }

const styles = StyleSheet.create({
    
    container: {
       flex:1,
      justifyContent: "center", 
      alignItems: "center",
      color: 'white',
    },
});

 export default  SearchScreen;
