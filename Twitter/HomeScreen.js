import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';


import AppHeader from './ScreenUtamaHeader';
import Twitter from './Tweet';


const HomeScreen = () => {
    return(
      
          <View style={styles.container}>
          {/* <View> */}
          <ScrollView>
            <AppHeader/>
               
               <Twitter />

               </ScrollView>
            </View>
        
    );
    }

const styles = StyleSheet.create({
    
    container: {
       flex:1,
      justifyContent: "center", 
      alignItems: "center",
      
    },
});

 export default HomeScreen;
