import {Types} from './types';
import {action} from 'typesafe-actions';

export const GetPokemons = () => {
  return action(Types.GET_POKEMONS, {});
};

export const GetPokemonsSuccess = (pokemons: any[]) => {
  return action(Types.GET_POKEMONS_SUCCESS, {pokemons});
};

export const GetPokemonsFailure = (error: number) => {
  return action(Types.GET_POKEMONS_FAILURE, {error});
};
