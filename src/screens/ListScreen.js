import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [{name:'friends #1', age : 20},{name:'friends #2', age : 30},{name:'friends #3', age : 20},{name:'friends #4', age : 20}]
    //const friends = [{name:'friends #1', key: '1'},{name:'friends #2', key: '2'},{name:'friends #3', key: '3'},{name:'friends #4', key: '4'}]
    return <View>
        <FlatList 
        // list will show horizontally
        horizontal
        // scroll will be disabled
        showsHorizontalScrollIndicator = {false}
        keyExtractor={friend => friends.name} 
        data={friends}  
        renderItem={(item) =>{
            <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}></FlatList>
    </View>
}

const styles = StyleSheet.create({
    textStyle : {
        // this will create extra spacing between text up and down
        marginVertical : 50
    }
})

export default ListScreen;