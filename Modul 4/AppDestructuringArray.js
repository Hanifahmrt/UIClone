import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppDestructuringArray = () => {
    const siswa = ['budi', 'wati', 'iwan'];
    const [siswa1, siswa2 , siswa3] = siswa;

return (
    <View>
        <Text>Daftar Siswa</Text>
        <Text>{siswa1}</Text>
        <Text>{siswa2}</Text>
        <Text>{siswa3}</Text>
    </View> 
  )
}
export default AppDestructuringArray;

// const siswa = ['budi', 'wati', 'iwan'];
// const [, , siswa3] = siswa;
// return (
// <View>
// <Text>Daftar Siswa</Text>
// <Text>{siswa3}</Text>
// </View>
// )

// const siswa = ['budi', 'wati', 'iwan'];
// const [siswa1, , siswa3] = siswa;
// return (
// <View>
// <Text>Daftar Siswa</Text>
// <Text>{siswa1}</Text>
//  <Text>{siswa3}</Text>
// </View>
// )


// const person = {
//     firstName: "Iwan",
//     lastName: "Irawan",
//     age: 21,
//     gender: "man"
//     };
//     fullName = person.firstName + " " + person.lastName;
    