import React, { useState } from 'react';
import {Text, StyleSheet, View, } from 'react-native';

 const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
     return (
     <View> 
    <Button title='Increase' onPress={() =>{
        setCounter(count + 1);
    }}/>
    <Button title='Decrease' onPress={() =>{
        setCounter(count - 1);
    }}/>
    <Text>count is - {counter}</Text>
     </View>
     );
 }

 const styles = StyleSheet.create({

 })

 export default CounterScreen;