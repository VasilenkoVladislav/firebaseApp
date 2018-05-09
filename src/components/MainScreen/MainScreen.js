import { View, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { PureComponent } from 'react';
import CustomHeader from './CustomHeader';
import { firebaseDatabaseService } from '../../services/firebaseDatabaseService';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    position: PropTypes.array.isRequired
};

class MainScreen extends PureComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                const latitude = parseFloat(position.coords.latitude);
                const longitude = parseFloat(position.coords.longitude);
                const lastRegion = {
                    latitude,
                    longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0
                };
                firebaseDatabaseService.updatePosition('Vladislav', lastRegion);
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    render () {
        const { position } = this.props;
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
    }
}

MainScreen.navigationOptions = () => {
    return {
        header: <CustomHeader/>
    }
};

MainScreen.propTypes = propTypes;

export default MainScreen;
