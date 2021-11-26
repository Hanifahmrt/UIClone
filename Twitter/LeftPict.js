import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


export const LeftPicture = () => {
    return(
      <View>
        <Image
        source={require('./image/jerome-polin.png')}
        style={{
        // width: 80,
        // height: 80,
        borderRadius: 50,
        width: 55, height: 55, marginLeft: 23, 
    }}
  />
  </View>
    )
}

export const LeftPictureSecond = () => {
  return(
    <View style={styles.PictTwo}>
      <Image
      source={require('./image/jefri-nichol.png')}
      style={{
      
      borderRadius: 50,
      width: 55, height: 55
  }}
/>
</View>
  )
}

const styles = StyleSheet.create({
  // PictOne: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   // marginBottom: 40,
  //   marginLeft: -30,
  //   padding: 10,
  
  // },
  PictTwo:{
    marginLeft:-50,
    marginTop: 565,
    
    
  },
})
