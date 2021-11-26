// HoL 2 Hello world
import React from 'react';
import { Text, View } from 'react-native';


const HelloWorldApp = () => {
    return (
        <View>
        <Text>Hello world!</Text>
        </View>
)
}
export default HelloWorldApp;


// HoL 2 
// import React from 'react';
// import { Text, View } from 'react-native';
// const HelloWorldApp = () => {
//  return (
//  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//  <Text style={{fontWeight: 'bold', fontSize: 32}}>Hello world!</Text>
//  </View>
//  )
// }
// export default HelloWorldApp;


// HoL 2 Inline style
// import React from 'react';
// import { Text, View } from 'react-native';
// const HelloWorldApp = () => {
//  return (
//  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}
// }>
//  <Text style={{fontWeight: 'bold', fontSize: 32}}>Hello world!</Text>
//  <Text style={{fontWeight: 'bold', fontSize: 32}}>Hello React Native!
// </Text>
//  </View>
//  )
// }
// export default HelloWorldApp;


// HoL 2 Inline style
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// const styles = StyleSheet.create({
//  text_big: {
//  fontWeight: 'bold', fontSize: 23
//  },
//  container: {
//  flex: 1, justifyContent: "center", alignItems: "center"
//  }
// })
// const HelloWorldApp = () => {
//  return (
//  <View style={styles.container}>
//  <Text style={styles.text_big}>Hello world!</Text>
//  <Text style={styles.text_big}>Hello React Native!</Text>
//  </View>
//  )
// }
// export default HelloWorldApp;


//HoL 2 kode 6. External sytle
// import React from 'react';
// import { Text, View } from 'react-native';
// import styles from './AppStyles'
// const HelloWorldApp = () => {
//  return (
//  <View style={styles.container}>
//  <Text style={styles.text_big}>Hello world!</Text>
//  <Text style={styles.text_big}>Hello React Native!</Text>
//  </View>
//  )
// }
// export default HelloWorldApp;


//HoL2 Image
// import React from 'react';
// import { Text, View, Image } from 'react-native';
// import styles from './AppStyles'
// const HelloWorldApp = () => {
//  return (
//  <View style={styles.container}>
//  <Text style={styles.text_big}>Hello world!</Text>
//  <Text style={styles.text_big}>Hello React Native!</Text>
//  <Image source={require('./image/flutter-logo.png')} style={{width: 300, resizeMode:'contain'}} />
//  </View>
//  )
// }
// export default HelloWorldApp;



// HoL 2 kode 7. suctom componen internal
// import React from 'react';
// import { Text, View, Image } from 'react-native';
// const AppHeader = () => {
//  return (
//  <View style={{height:60, backgroundColor: 'gray'}}>
//  <Text style={{fontWeight: 'bold',fontSize: 32}}>Application Title</Text>
//  </View>
//  );
// }
// const AppContent = () => {
//  return (
//  <View>
//  <Text style={{fontWeight: 'bold',fontSize: 23}}>Content</Text>
//  <Image source={require('./image/flutter-logo.png')} style={{width: 300, height:50, resizeMode:'contain'}} />
//  </View>
//  );
// }

// const HelloWorldApp = () => {
//  return (
//  <View>
//  <AppHeader/>
//  <AppContent/>
//  </View>
//  )
// }
// export default HelloWorldApp;

//HoL 2 kode 9. App.js external custom
// import React from 'react';
// import { Text, View, Image } from 'react-native';
// import {AppHeader, AppContent} from './AppCustomComponents'
// const HelloWorldApp = () => {
//  return (
//  <View>
//  <AppHeader/>
//  <AppContent/>
//  </View>
//  )
// }
// export default HelloWorldApp;





// HOL 5 twitter
// import React  from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './tabs';


// const App = () => {
//     return(
//         <NavigationContainer>
//             <Tabs />
          
//         </NavigationContainer>
//     );
//     }
//     export default App;