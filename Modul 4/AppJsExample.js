import React from 'react';
import { Component } from 'react';
import { Text, View} from 'react-native';

function FunctionWithReturn(){
    return "Function With Return";
}

var string1 = "";
function FunctionWithOutReturn(value) {
   string1 = value;
}

function AppJsExample() {
var string2 = FunctionWithReturn();
FunctionWithOutReturn("Function With Out Return");

    return (
        <View>
            <Text>Hello JavaScript ES6</Text>
            <Text>{string1}</Text>
            <Text>{string2}</Text>
        </View>
  )
}
export default AppJsExample;

//HoL 4 Kode 3
// import React from 'react';
// import { Text, View } from 'react-native';
// const FunctionWithReturn = () => {
// return "Function With Return";
// }
// var string1 = "";
// const FunctionWithOutReturn = (value) => {
// string1 = value;
// }
// const AppJsExample = () => {
// var string2 = FunctionWithReturn();
// FunctionWithOutReturn("Function With Out Return");
// return (
// <View>
// <Text>Hello JavaScript ES6</Text>
// <Text>{string1}</Text>
// <Text>{string2}</Text>
// </View>
// )
// }
// export default AppJsExample;