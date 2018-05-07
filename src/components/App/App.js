import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { addListener } from '../../redux/utils/reactNavigation';
import AppNavigator from '../../router';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    nav: PropTypes.object.isRequired
};

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (this.isRootScreen(nav)) return false;
        dispatch(NavigationActions.back());
        return true;
    };
    isRootScreen(navigator) {
        if (navigator.index == null) {
            return true;
        }
        if (navigator.index > 0) {
            return false;
        }
        return !navigator.routes || !navigator.routes.find(route => !this.isRootScreen(route));
    }
    render () {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({ dispatch, state: nav, addListener });
        return (<AppNavigator navigation={navigation}/>);
    }
}

App.propTypes = propTypes;

export default App;