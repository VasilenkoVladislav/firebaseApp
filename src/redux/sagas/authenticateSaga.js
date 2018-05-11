import { put, call, takeLatest, takeEvery, take } from 'redux-saga/effects';
import { signInSuccess, signInError, signOutSuccess, signOutError } from '../actions/entities/authenticateActions';
import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SYNC_USER } from '../constansActions';
import { Alert } from 'react-native';
import { eventChannel } from 'redux-saga'
import { firebaseService } from '../../services/firebaseService';
import { push } from '../actions/nav';

export function * syncUser () {
    try {
        const channel = yield call(syncUserChannel);
        while (true) {
            const { user } = yield take(channel);
            channel.close();
            if (user) {
                yield put(signInSuccess());
                yield put(push('App'));
            } else {
                yield put(signInError());
                yield put(push('Auth'));
            }
        }
    } catch (error) {
        yield put(signInError());
        yield put(push('Auth'));
    }

}

export function * signIn ({payload}) {
    try {
        const { user } = yield call(firebaseService.signIn, payload);
        if (user) {
            yield put(signInSuccess());
            yield put(push('App'));
        }
    } catch (error) {
        Alert.alert('Invalid login or password', error.message);
        yield put(signInError());
    }

}

export function * signOut () {
    try {
        yield call(firebaseService.signOut);
        yield put(push('Auth'));
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutError())
    }
}

function syncUserChannel () {
    if (this._authChannel) {
        return this._authChannel;
    }
    const channel = eventChannel(emit => {
        return firebaseService.onAuthStateChanged(
            user => emit({ user }),
            error => emit({ error })
        );
    });
    this._authChannel = channel;
    return channel
}

export function * watchSyncUser () {
    yield takeEvery(SYNC_USER, syncUser);
}

export function * watchSignIn () {
    yield takeLatest(SIGN_IN_REQUEST, signIn);
}

export function * watchSignOut () {
    yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export const authSagas = [
    watchSyncUser(),
    watchSignIn(),
    watchSignOut()
];