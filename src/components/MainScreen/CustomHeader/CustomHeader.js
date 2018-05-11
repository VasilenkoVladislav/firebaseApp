import { View, Text } from 'react-native';
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

    componentDidMount() {
        this.watchPosition();
    }

    watchPosition = () => {
        console.log(firebaseService.currentUser);
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
                firebaseService.updatePosition('Vladislav', lastRegion);
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

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
