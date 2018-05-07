import { SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
    SYNC_USER,
    OAUTHENTICATE_REQUEST } from '../../constansActions';

export function syncUser () {
    return { type: SYNC_USER };
}

export function oAuthSignInRequest (provider) {
    return { type: OAUTHENTICATE_REQUEST, payload: provider };
}

export function signInRequest (email, password) {
    return { type: SIGN_IN_REQUEST, payload: {email, password} };
}

export function signInSuccess (data) {
    return { type: SIGN_IN_SUCCESS, payload: data };
}

export function signInError () {
    return { type: SIGN_IN_ERROR };
}

export function signOutRequest () {
    return { type: SIGN_OUT_REQUEST };
}

export function signOutSuccess () {
    return { type: SIGN_OUT_SUCCESS };
}

export function signOutError () {
    return { type: SIGN_OUT_ERROR };
}

