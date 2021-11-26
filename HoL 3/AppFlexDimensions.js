import React from 'react';
import { View } from 'react-native';

const AppFlexDimensions = () => {
  return (
    <View style={{flex:1, flexDirection:'row-reverse'}}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
    </View>
  );
};
export default AppFlexDimensions;

{/* <View style={{flex:1}}>
<View style={{ flex: 1, backgroundColor: 'powderblue' }} />
<View style={{ flex: 1, backgroundColor: 'skyblue' }} />
<View style={{ flex: 1, backgroundColor: 'steelblue' }} />
</View> */}

{/* <View style={{flex:1}}>
<View style={{ flex: 1, backgroundColor: 'powderblue' }} />
<View style={{ flex: 2, backgroundColor: 'skyblue' }} />
<View style={{ flex: 3, backgroundColor: 'steelblue' }} />
</View> */}

{/* <View style={{flex:1}}>
<View style={{ height:100, backgroundColor: 'powderblue' }} />
<View style={{ flex: 1, backgroundColor: 'skyblue' }} />
<View style={{ height:100, backgroundColor: 'steelblue' }} />
</View> */}


{/* <View style={{flex:1, flexDirection:'column-reverse'}}> */}

{/* <View style={{flex:1, flexDirection:'row'}}></View> */}

{/* <View style={{flex:1, flexDirection:'row-reverse'}}></View> */}