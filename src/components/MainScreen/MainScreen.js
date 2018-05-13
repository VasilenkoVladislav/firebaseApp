import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, StatusBar } from 'react-native';
import CustomHeader from './CustomHeader';
import { firebaseService } from '../../services/firebaseService';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    position: PropTypes.array.isRequired
};

const MainScreen = ({position}) => {
    const otherUser = position.find(pos => pos.id !== firebaseService.currentUser.uid);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#443685"/>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={otherUser && otherUser.coords}>
                {position.map(marker => (
                    <Marker
                        key={marker.name}
                        coordinate={marker.coords}
                        title={marker.name}/>
                ))}
            </MapView>
        </View>
    )
};

MainScreen.navigationOptions = () => {
    return {
        header: <CustomHeader/>
    }
};

MainScreen.propTypes = propTypes;

export default MainScreen;
