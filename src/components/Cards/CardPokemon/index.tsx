import React from 'react';
import {useEffect} from 'react';
import {IPokemonInfos} from '../../../store/ducks/pokemons/types';
import {
  CardContainer,
  PokemonName,
  PokemonImage,
  Row,
  PokemonStats,
  DefenseIcon,
  AttackIcon,
  SpeedIcon,
  PokemonTypes,
} from './styles';
import {useState} from 'react';

interface ICardPokemon {
  url: string;
  skeleton?: boolean;
}

export const CardPokemon = ({url = '', skeleton}: ICardPokemon) => {
  const [pokemonInfos, setPokemonInfos] = useState<IPokemonInfos>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data: IPokemonInfos) => {
        setPokemonInfos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  const GetStats = (stats: string) =>
    pokemonInfos?.stats.find((s) => s.stat.name === stats)?.base_stat;

  const types = pokemonInfos?.types.map((t) => t.type.name);

  const typesString = types ? types.join(' • ') : '';

  const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
  ];

  return !skeleton && !loading ? (
    <CardContainer>
      <PokemonStats style={{textAlign: 'right', width: '100%'}}>
        {GetStats('hp')} HP
      </PokemonStats>
      <PokemonImage
        style={{
          backgroundImage: `url("https://pokeres.bastionbot.org/images/pokemon/${pokemonInfos?.id}.png")`,
        }}
      />
      <PokemonName>{pokemonInfos?.name}</PokemonName>
      <Row style={{width: '90%'}}>
        <Row>
          <SpeedIcon />
          <PokemonStats>{GetStats('speed')}</PokemonStats>
        </Row>
        <Row>
          <AttackIcon />
          <PokemonStats>{GetStats('attack')}</PokemonStats>
        </Row>
        <Row>
          <DefenseIcon />
          <PokemonStats>{GetStats('defense')}</PokemonStats>
        </Row>
      </Row>
      <PokemonTypes>{typesString}</PokemonTypes>
    </CardContainer>
  ) : (
    <CardContainer
      style={{background: 'var(--background-color)', cursor: 'default'}}
    />
  );
};
