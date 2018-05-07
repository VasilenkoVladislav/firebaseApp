import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reactNavigationMiddleware } from './utils/reactNavigation';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, reactNavigationMiddleware];
    if (__DEV__) {
        middleware.push(logger);
    }
    const store = createStore(rootReducer, applyMiddleware(...middleware));
    sagaMiddleware.run(rootSaga);
    return { store };
}
