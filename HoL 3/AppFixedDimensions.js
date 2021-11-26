import React from 'react';
import { View } from 'react-native';
const AppFlexDimensions = () => {
return (
<View style={{flex:1}}>
<View style={{backgroundColor: 'powderblue' }} />
<View style={{backgroundColor: 'skyblue' }} />
<View style={{backgroundColor: 'steelblue' }} />
</View>
);
};
export default AppFlexDimensions;

// const AppFixedDimensions = () => {
//     return (
//     <View>
//     <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
//     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//     <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
//     </View>
//     );
//     };