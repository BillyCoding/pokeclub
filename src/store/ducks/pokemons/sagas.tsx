import api from '../../../services/api';
import {put, call, select} from 'redux-saga/effects';
import {GetPokemonsSuccess, GetPokemonsFailure} from './actions';
import {AppStore} from '../../types';
const getUser = (state: AppStore) => state.user;

export function* getPokemons({payload}: any) {
  let {data: user} = yield select(getUser);
  const token = user.token;
  const {page, limit} = payload;

  try {
    const {data} = yield call(api.get, `/pokemon/${limit}/${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('\x1b[32mGET_POKEMONS');
    yield put(GetPokemonsSuccess(data));
  } catch ({message, response}) {
    if (!response) {
      console.log('\x1b[31mERRO NO GET_POKEMONS', message);
      yield put(GetPokemonsFailure(404));
      return;
    }

    console.log(`\x1b[31mERRO NO GET_POKEMONS [${message}]`);

    const {status} = response;
    yield put(GetPokemonsFailure(status));
  }
}
