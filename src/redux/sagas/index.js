import { all } from 'redux-saga/effects';
import { authSagas } from './authenticateSaga';

export default function * rootSaga () {
    yield all([
        ...authSagas
    ]);
}
