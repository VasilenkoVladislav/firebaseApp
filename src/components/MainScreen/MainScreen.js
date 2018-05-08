import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
    signOut: PropTypes.func.isRequired
};

const MainScreen = ({ signOut }) => {
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
};

MainScreen.propTypes = propTypes;

export default MainScreen;
