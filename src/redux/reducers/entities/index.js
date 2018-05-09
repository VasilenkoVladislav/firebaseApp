import { combineReducers } from 'redux';
import userReducer from './userReducer';
import positionReducer from './positionReducer';

export default combineReducers({
    user: userReducer,
    position: positionReducer
});