import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LeftPicture, LeftPictureSecond } from './LeftPict';
import { ScreenUtama, ScreenUtamaSecond, ScreenUtamaThird} from './ScreenUtama';




const Twitter = () => {
    return(
      
      
      <View style={styles.Feed}>    
        {/* <View style={styles.FeedOne}> */}
       <LeftPicture/>
      <LeftPictureSecond/>


        <ScrollView>
            <ScreenUtama/>
           
            <ScreenUtamaSecond/>
            <ScreenUtamaThird/>
            
            </ScrollView>

            {/* </View> */}
      
      </View>

    

    )
 }

const styles = StyleSheet.create({
    Feed: {
      // flex:.1,
      width: '100%',
      flexDirection: 'row',
      marginBottom: 40,
      marginTop: 10,
      marginLeft:-30,
      borderTopWidth: 0.6,
      // borderBottomWidth: 0.6,
      padding: 10,
      borderColor: 'grey',
    },

  })   

export default Twitter;

