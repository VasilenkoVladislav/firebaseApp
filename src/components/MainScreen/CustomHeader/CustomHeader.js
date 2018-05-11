import { View, Text, PermissionsAndroid } from 'react-native';
import { Icon } from 'react-native-elements';
import React, { PureComponent } from 'react';
import { firebaseService } from '../../../services/firebaseService';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    signOut: PropTypes.func.isRequired
};

class CustomHeader extends PureComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount = async () => {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Where are You? App Geolocation Permission',
                    'message': 'Where are You? App needs access to your geolocation'
                }
            );
        } catch (err) {
            // empty
        }
        this.watchPosition();
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    watchPosition = () => {
        if (this.watchId) {
            this.watchId = navigator.geolocation.clearWatch(this.watchId);
        }
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
                firebaseService.updatePosition(firebaseService.currentUser.uid, lastRegion);
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    };

    render () {
        const { signOut } = this.props;
        return (
            <View style={styles.container}>
                <Icon name='sync' underlayColor='transparent' color='white' onPress={this.watchPosition}/>
                <Text style={styles.title}>Where are You?</Text>
                <Icon name='power-settings-new' underlayColor='transparent' color='white' onPress={signOut}/>
            </View>
        );
    }
}

CustomHeader.propTypes = propTypes;

export default CustomHeader;
