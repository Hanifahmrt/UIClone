import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';


import AppMail from './Screen3';
import {IsiMail} from './Screen4';
//  import { LeftPicture} from './LeftPict'



const MailScreen = () => {
    return(
      
          <View style={styles.container}>
          {/* <View> */}
          <ScrollView>
            <AppMail/>
            {/* <LeftPicture/> */}
               <IsiMail/>

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
    // const styles = StyleSheet.create({
    //     Feed: {
    //       // flex:.1,
    //       width: '100%',
    //       flexDirection: 'row',
    //       marginBottom: 40,
    //       marginTop: 10,
    //       marginLeft:-30,
    //       borderTopWidth: 0.6,
    //       // borderBottomWidth: 0.6,
    //       padding: 10,
    //       borderColor: 'grey',
    //     },
    
    //   })   

 export default MailScreen;
