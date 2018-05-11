import { View, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CustomHeader from './CustomHeader';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    position: PropTypes.array.isRequired
};

const MainScreen = ({position}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#443685"/>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}>
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
