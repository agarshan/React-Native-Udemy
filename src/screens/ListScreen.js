import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [{name:'friends #1'},{name:'friends #2'},{name:'friends #3'},{name:'friends #4'}]
    //const friends = [{name:'friends #1', key: '1'},{name:'friends #2', key: '2'},{name:'friends #3', key: '3'},{name:'friends #4', key: '4'}]
    return <View>
        <FlatList keyExtractor={friend => friends.name} data={friends}  renderItem={(item) =>{
            <Text>{item.name}</Text>
        }}></FlatList>
    </View>
}

export default ListScreen;