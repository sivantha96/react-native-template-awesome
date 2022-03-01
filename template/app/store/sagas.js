import { all } from 'redux-saga/effects';
import { homeSagas } from '../features/Home/saga';
import { appSagas } from './AppSaga';

/**
 * root saga of the app
 * @returns array of sagas
 */
export default function* rootSaga() {
    yield all([...appSagas, ...homeSagas]);
}
