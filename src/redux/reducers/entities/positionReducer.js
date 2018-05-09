import { UPDATE_POSITION, SIGN_OUT_SUCCESS } from '../../constansActions';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_POSITION:
        return action.payload;
    case SIGN_OUT_SUCCESS:
        return initialState;
    default:
        return state;
    }
}