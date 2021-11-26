// import * as React from 'react';
// import { View, Text, Button, Image } from 'react-native';

// export const DetailScreen = ({ route, navigation }) => {
    
//     // DetailScreen itu isi dari touchably / tombol yang telah dibuat di screen 3

// const { itemId } = route.params;
//     const movies = [
//     {"id":0, "value":'The Squid Game', "img":require('./image/Squid-Game.png')}, 
//     {"id":1, "value":'Hometown Cha Cha Cha', "img":require('./image/Hometown chacha.png')}, 
//     {"id":2, "value":'Eternal', "img":require('./image/Eternal.png')}, 
//     {"id":3, "value":'Spider-Man: No Way Home', "img":require('./image/Spider-man.png')}, 
// ];

// const selectedMovie = movies[itemId]; //movie dari cons "movie" discreen 3 dan merupakan Array method
//     return (
//     <View style={{ flex: 1 }}>
//         <Text>Detail Screen</Text>
//         <Text>Movie ID: {selectedMovie.id}</Text>
//         <Text>Movie Title: {selectedMovie.value}</Text>
//         <Image source={selectedMovie.img} style={{width: 400, height: 490, resizeMode:'contain'}} />
//         <Button title="Go Back" onPress={() => navigation.goBack()}/>
//     </View>
//   );
// }




// // KODE 15
// const AppHeaderWoLogo = () => {
//     return(
//     <View style={{  flex: 1, 
//                     width:'auto', 
//                     flexDirection:'row', 
//                     marginLeft:-15, 
//                     paddingLeft:0 }}>

//     <TextInput placeholder='ketik kata kunci di sini'
//         style={{width:'66%', 
//             height:40, 
//             backgroundColor:'white', 
//             marginTop:5, 
//             marginLeft:10, 
//             marginRight:10}} />
//     <Image style={{ width: 50, height: 50 }}
//            source={require('./image/search.png')} />
//     </View>
//     );
// }

// // Kode 16. Cara menyisipkan komponen pada sebuah screen.
// <Stack.Screen name="DetailScreen"
//         component={DetailScreen}
//         options={{ title: 'Movie Detail',
//     headerTitle: (props) => <AppHeaderWoLogo {...props}/> }}/>


// // Kode 17. Komponen AppHeader.
// const AppHeader = () => {
//     return(
//         <View style={{ flex: 1, 
//             width:'auto', 
//             flexDirection:'row', 
//             marginLeft:-15, 
//             paddingLeft:0 }}>
//         <Image style={{ width: 50, height: 50 }} source={require('./image/tel-u.png')} />
//         <TextInput placeholder='ketik kata kunci di sini'
//             style={{width:'66%', 
//             height:40, 
//             backgroundColor:'white', 
//             marginTop:5, 
//             marginLeft:10, 
//             marginRight:10}} />
//         <Image style={{ width: 50, height: 50 }} source={require('./image/search.png')} />
//         </View>
//     );
// }


// TWITEER
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { LeftPicture} from './LeftPict';

export const IsiMail = () => {
        return(
        <View style={styles.containerTwo}>
        {/* <LeftPicture/> */}
          <View style={styles.tweetcontainer}>
          {/* <LeftPicture/> */}
          <Image source={require('./image/jerome-polin.png')} style={{borderRadius: 50, width: 55, height: 55, marginLeft: 23}}></Image>
          <Text style={styles.name}>Jerome Polin</Text>
          <Text style={styles.username}>@jerome polin</Text>
         
          <Text style={styles.date}>2s</Text>
          </View>
          <View>         
            <Text style={styles.content}>Hai ka wkwk</Text>
          </View>
         
      {/* <View style={styles.isicontainer}> */}
      {/* <View>
         <Text style={styles.content}>Kalau Chat itu dibales, jangan diread doang. emgnya Koran -_- </Text>
         </View>
          */}
           
            
          
        </View>
      
      
        );
      
      }


  const styles = StyleSheet.create({  //Style tulisan username, name
     
        containerTwo:{
          flex:1,
          marginBottom: 30,
          // backgroundColor: 'red',
       
                marginBottom: 10,
                marginTop: 10,
                marginLeft:-20,
                padding: 10,
                borderTopWidth: 0.4,
      borderBottomWidth: 0.4,
      borderColor: 'grey',
              
        },
        tweetcontainer: {
         flexDirection: 'row',
         justifyContent: 'space-between',
        },
        isicontainer:{
            flexDirection:'row'
        },
        name: {
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 15,
            marginRight:2,
        },
        username: {
            marginHorizontal: 5,
            color: 'grey',
            marginRight:80,
            
      
        },
       date:{
            marginHorizontal: 5,
            color: 'grey',
            marginLeft:10,
       },
       content:{
        marginHorizontal: 5,
         marginTop: -30,
         marginLeft: 95,
         lineHeight: 19,
         
        
       }
 
        
   }
   );























