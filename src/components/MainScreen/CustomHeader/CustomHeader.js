import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    signOut: PropTypes.func.isRequired
};

const CustomHeader = ({signOut}) => {
    return (
      <View style={styles.container}>
          <Icon name='sync' underlayColor='transparent' color='white' onPress={() => {}}/>
          <Text style={styles.title}>Where are You?</Text>
          <Icon name='power-settings-new' underlayColor='transparent' color='white' onPress={signOut}/>
      </View>
    );
};

CustomHeader.propTypes = propTypes;

export default CustomHeader;
