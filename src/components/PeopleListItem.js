import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

//import { capitalizeFirstLetter } from '../capitalizeFirstLetter';
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)

}
const PeopleListItem = props =>{
    const { people, navigateToPeopleDetail, onPress} = props;
    const { title, first, last} = people.name;
    return(
        <TouchableOpacity onPress={() =>{
            navigateToPeopleDetail({ people });
            }}>
            <View  style={styles.line}>
                <Image style={styles.avatar}source={{uri: people.picture.thumbnail}}/>
                <Text style={styles.lineText}>
                { `${ 
                    capitalizeFirstLetter(title)
                } ${
                    capitalizeFirstLetter(first)
                } ${ 
                    capitalizeFirstLetter(last)
                }` }
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth:1,
        borderBottomColor:"#bbb",
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 15,
        flex: 7
        
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius:50
    }
})

export default PeopleListItem;