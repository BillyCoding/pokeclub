import {all, takeLatest} from 'redux-saga/effects';

import {Types as PokemonsType} from './pokemons/types';
import {getPokemons} from './pokemons/sagas';
import {Types as UsersType} from './users/types';
import {postUser} from './users/sagas';

export default function* rootSaga() {
  yield all([takeLatest(PokemonsType.GET_POKEMONS, getPokemons)]);
  yield all([takeLatest(UsersType.POST_USER, postUser)]);
}
