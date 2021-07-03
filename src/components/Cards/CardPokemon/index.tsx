import React from 'react';
import {useEffect} from 'react';
import {IPokemonInfos, TypePokemon} from '../../../store/ducks/pokemons/types';
import {CardContainer, PokemonName} from './styles';
import {useState} from 'react';

interface ICardPokemon {
  url: string;
}


export const CardPokemon = ({url}: ICardPokemon) => {
  const [pokemonInfos, setPokemonInfos] = useState<IPokemonInfos>();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data: IPokemonInfos) => setPokemonInfos(data));
  }, [url]);

  return (
    <CardContainer>
      <PokemonName>{pokemonInfos?.name}</PokemonName>
    </CardContainer>
  );
};
