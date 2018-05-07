import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    syncUser: PropTypes.func.isRequired
};

class SplashScreen extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        this.props.syncUser();
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={70} color='grey' />
            </View>
        )
    }
}

SplashScreen.propTypes = propTypes;

export default SplashScreen;