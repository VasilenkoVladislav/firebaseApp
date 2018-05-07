import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
    signOut: PropTypes.func.isRequired
};

const MainScreen = ({ signOut }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
};

export default MainScreen;
