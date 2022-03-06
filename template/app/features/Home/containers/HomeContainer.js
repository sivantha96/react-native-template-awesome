import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

export class HomeContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Container Works</Text>
                <Text>From Home Reducer - {this.props.test}</Text>
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

HomeContainer.propTypes = {
    test: PropTypes.string,
};

const mapStatesToProps = state => ({
    test: state.homeReducer.test,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(HomeContainer);
