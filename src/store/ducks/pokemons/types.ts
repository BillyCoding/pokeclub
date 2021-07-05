export const Types = {
  GET_POKEMONS: '@theme/GET_POKEMONS',
  GET_POKEMONS_SUCCESS: '@theme/GET_POKEMONS_SUCCESS',
  GET_POKEMONS_FAILURE: '@theme/GET_POKEMONS_FAILURE',
};

export interface TypesPokemons {
  data: TypePokemon[];
  loading: boolean;
  error: boolean;
}

export interface TypePokemon {
  name: string;
  url: string;
}

export interface IPokemonInfos {
  id: number;
  name: string;
  stats: IPokemonStats[];
  types: IPokemonTypes[];
  base_experience: number;
  abilities: any[];
  photo: string;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;

  stat: {
    name: string;
    url: string;
  };
}

interface IPokemonTypes {
  slot: number;

  type: {
    name: string;
    url: string;
  };
}
