import api from '../../../services/api';
import {put, call} from 'redux-saga/effects';
import {GetPokemonsSuccess, GetPokemonsFailure} from './actions';

export function* getPokemons() {
  try {
    const {data} = yield call(api.get, '/', {
      params: {
        limit: 4,
      },
    });

    console.log('\x1b[32mGET_POKEMONS');
    yield put(GetPokemonsSuccess(data.results));
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
