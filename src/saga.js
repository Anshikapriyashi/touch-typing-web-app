// saga.js
import { put, takeLatest } from 'redux-saga/effects';
import { generateRandomKey } from './actions';

function* generateRandomKeySaga() {
  yield put(generateRandomKey());
}

export default function* rootSaga() {
  yield takeLatest('START_TYPING', generateRandomKeySaga);
}
