import { combineReducers } from 'redux';
import entitiesReducers from './entities';
import navReducer from './nav';

export default combineReducers({
    entities: entitiesReducers,
    nav: navReducer
});