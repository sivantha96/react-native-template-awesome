import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Container Works</Text>
                <Icon name="rocket" size={30} color="#900" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeContainer;
