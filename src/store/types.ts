import {TypesPokemons} from './ducks/pokemons/types';
import { TypesUser } from './ducks/users/types';
export interface AppStore {
  pokemons: TypesPokemons;
  user: TypesUser;
}
