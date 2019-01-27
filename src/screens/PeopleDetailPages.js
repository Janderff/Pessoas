import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PeolplePages } from './PeoplePages';

import capitalizeFirstLetter, { capitalizaFirstLetter } from '../util/capitalizeFirstLetter'
import Line from '../components/Line';

export default class PeopleDetailPages extends React.Component {
    static navigationOptions = ({ navigation }) => {

        const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
        return ({
            title: peopleName,
            headerTiTleStyle: {
                fontSize: 30,
                color: '#fff',
                fontWeight: 'normal'
            }
        })
    }

    render() {
        const { people } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: people.picture.large }}
                    style={styles.avatar} />
                <View style={styles.detailContainer}>
                <Line label="Email:" content={people.email} />
                <Line label="Cidade:" content={people.location.city} /> 
                <Line label="Estado:" content={people.location.state} />    
                <Line label="Telefone:" content={people.phone} /> 
                <Line label="Celular:" content={people.cell} /> 
                <Line label="Nacionalidade:" content={people.nat} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        //borderRadius: 90
    },
    container: {
        padding: 10
    },
    detailContainer: {
        backgroundColor: '#4a5fc9',
        marginTop: 20,
        elevation: 1
    },
    
})