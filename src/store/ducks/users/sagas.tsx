import api from '../../../services/api';
import {put, call} from 'redux-saga/effects';
import {PostUserSuccess, PostUserFailure} from './actions';

export function* postUser({payload}: any) {
  const {username, password} = payload;
  try {
    const {data} = yield call(api.post, '/session', {
      username,
      password,
    });

    console.log('\x1b[32mPOST_USER');
    yield put(PostUserSuccess(data));
  } catch ({message, response}) {
    if (!response) {
      console.log('\x1b[31mERRO NO POST_USER', message);
      yield put(PostUserFailure(404));
      return;
    }

    console.log(`\x1b[31mERRO NO POST_USER [${message}]`);

    const {status} = response;
    yield put(PostUserFailure(status));
  }
}
