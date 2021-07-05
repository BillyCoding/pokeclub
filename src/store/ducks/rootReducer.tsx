import {combineReducers} from 'redux';
import pokemons from './pokemons';
import user from './users';

const reducers = combineReducers({
  pokemons,
  user
});

export default reducers;
