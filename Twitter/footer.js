import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
// import { tweets } from './IsiTweet';


export const FooterOne = () => {
    return(
        <View style={styles.container}>
            <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/ios/50/000000/topic.png'}}></Image>
        <Text style={styles.number}>500k</Text>
        </View>

        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20,  }} source={{ uri :'https://img.icons8.com/fluency-systems-regular/48/000000/retweet.png'}}></Image>
        {/* <Image style={{ width: 20, height: 20}} source={require('./image/retweet-logo.png')}/> */}
        <Text style={styles.number}>5k</Text>
        </View>

        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-heart-miscellaneous-kiranshastry-lineal-kiranshastry.png'}}></Image>
        <Text style={styles.number}>400k</Text>
        </View>
        
        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-share-business-kiranshastry-lineal-kiranshastry.png'}}></Image>
        </View>
        </View>
    )
}

export const FooterTwo = () => {
    return(
        <View style={styles.container}>
            <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/ios/50/000000/topic.png'}}></Image>
        <Text style={styles.number}>600k</Text>
        </View>

        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20,  }} source={{ uri :'https://img.icons8.com/fluency-systems-regular/48/000000/retweet.png'}}></Image>
        <Text style={styles.number}>655k</Text>
        </View>

        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-heart-miscellaneous-kiranshastry-lineal-kiranshastry.png'}}></Image>
        <Text style={styles.number}>755k</Text>
        </View>
        
        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-share-business-kiranshastry-lineal-kiranshastry.png'}}></Image>
        </View>
        </View>
    )
}

export const FooterThree = () => {
    return(
        <View style={styles.container}>
            <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/ios/50/000000/topic.png'}}></Image>
        <Text style={styles.number}>200k</Text>
        </View>

        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20,  }} source={{ uri :'https://img.icons8.com/fluency-systems-regular/48/000000/retweet.png'}}></Image>
        <Text style={styles.number}>25k</Text>
        </View>

        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-heart-miscellaneous-kiranshastry-lineal-kiranshastry.png'}}></Image>
        <Text style={styles.number}>255k</Text>
        </View>
        
        <View style={styles.Iconcontainer}>
        <Image style={{ width: 20, height: 20}} source={{ uri :'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-share-business-kiranshastry-lineal-kiranshastry.png'}}></Image>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    Iconcontainer:{
        flexDirection: 'row',
        alignItem: 'center',
        marginBottom :10,
        marginVertical:10,
        color:'grey',
        
    },
    number:{
        marginLeft: 3,
        color: 'grey',
        textAlign: 'center',
    }

}
);