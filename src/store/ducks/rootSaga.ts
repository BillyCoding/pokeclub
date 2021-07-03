import {all, takeLatest} from 'redux-saga/effects';

import {Types as PokemonsType} from './pokemons/types';
import {getPokemons} from './pokemons/sagas';

export default function* rootSaga() {
  yield all([takeLatest(PokemonsType.GET_POKEMONS, getPokemons)]);
}
