import { StackNavigator, SwitchNavigator } from 'react-navigation'
import MainScreen  from '../components/MainScreen';
import React from 'react';
import SignInScreen from '../components/SignInScreen';
import SplashScreen from '../components/SplashScreen';

const AppStack = StackNavigator({
    Main: {
        screen: MainScreen
    }
});

const AuthStack  = StackNavigator({
    Login: {
        screen: SignInScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    }
});

export default SwitchNavigator(
    {
        Splash: {
            screen: SplashScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Splash',
    }
);