import { delay, put, takeLatest } from 'redux-saga/effects';
import { WatcherSaga } from '../genericTypes.d';
import {
  PROFILE_GET_INFO_EFFECT,
  PROFILE_GET_INFO_LOADING_STATE,
  PROFILE_GET_INFO_DATA_STATE,
  PROFILE_ADD_USER_EFFECT,
  PROFILE_ADD_USER_STATE,
} from './profile.actionTypes';

function* getProfileInfo() {
  yield put({ type: PROFILE_GET_INFO_LOADING_STATE });
  yield delay(500);
  yield put({ type: PROFILE_GET_INFO_DATA_STATE });
}

function* adduser() {
  yield put({ type: PROFILE_GET_INFO_LOADING_STATE });
  yield delay(500);
  yield put({ type: PROFILE_ADD_USER_STATE });
}

function* watchProfile(): WatcherSaga {
  yield takeLatest(PROFILE_GET_INFO_EFFECT, getProfileInfo);
  yield takeLatest(PROFILE_ADD_USER_EFFECT, adduser);
}

export default watchProfile;
