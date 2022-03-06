import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export class HomeContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Container Works</Text>
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
