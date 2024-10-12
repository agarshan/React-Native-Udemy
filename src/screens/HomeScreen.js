import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// button - limitied customization
// touchableopacity - high customizaiton

// props - configuration options
// const HomeScreen = ({navigation}) => { - we can use this method as well  to condense the code after es 2015
const HomeScreen = (props) => {
  return (
  <View>
  <Text style={styles.text}>Hi There</Text>
  <Button 
  onPress={() => props.navigation.navigate('Components')}
  title='Go to Components Demo'/>

  <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
  </TouchableOpacity>

  <Button 
  onPress={() => props.navigation.navigate('Image')}
  title='Go to Images Demo'/>

<Button 
  onPress={() => props.navigation.navigate('Counter')}
  title='Go to Counter Demo'/>

<Button 
  onPress={() => props.navigation.navigate('Color')}
  title='Go to Color Demo'/>

<Button 
  onPress={() => props.navigation.navigate('Square')}
  title='Go to Square Demo'/>
  </View>

  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default HomeScreen;
