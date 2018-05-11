import { SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_SUCCESS } from '../../constansActions';

const initialState = {
    isLoading: false,
    isSignIn: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SIGN_IN_REQUEST:
        return { ...state, isLoading: true };
    case SIGN_IN_SUCCESS:
        return { ...state, isSignIn: true, isLoading: false };
    case SIGN_IN_ERROR:
        return { ...state, isLoading: false };
    case SIGN_OUT_SUCCESS:
        return initialState;
    default:
        return state;
    }
}