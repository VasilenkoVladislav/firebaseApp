import { AppRegistry } from 'react-native';
import App from './src/components/App';
import configureStore from './src/redux/configureStore';
import React from 'react';
import { Provider } from 'react-redux';
import { firebaseDatabaseService } from './src/services/firebaseDatabaseService';

const { store } = configureStore();
firebaseDatabaseService.initialize(store);

const EntryPoint = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('firebaseApp', () => EntryPoint);
