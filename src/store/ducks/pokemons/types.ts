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
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
  };
  stats: IPokemonStats[];
  types: IPokemonTypes[];
  weight: number;
}

interface IPokemonStats {
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
