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
import {Link} from 'react-router-dom';

interface ICardPokemon {
  url?: string;
  value?: IPokemonInfos;
  skeleton?: boolean;
}

export const CardPokemon = ({url = '', value, skeleton}: ICardPokemon) => {
  const [pokemonInfos, setPokemonInfos] = useState<IPokemonInfos>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value) {
      setPokemonInfos(value);
      console.log(value);
    } else {
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
    }
  }, [url, value]);

  const GetStats = (stats: string) =>
    pokemonInfos?.stats.find((s) => s.stat.name === stats)?.base_stat || '-';

  const types = pokemonInfos?.types.map((t) => t.type.name);

  const typesString = types ? types.join(' • ') : '- • -';

  const pokemonPhoto = pokemonInfos?.id
    ? `url("https://pokeres.bastionbot.org/images/pokemon/${pokemonInfos?.id}.png")`
    : `url("https://s2.coinmarketcap.com/static/img/coins/200x200/8303.png")`;

  return !skeleton && !loading ? (
    <Link to={`/pokemon/${pokemonInfos?.name}`}>
      <CardContainer>
        <PokemonStats style={{textAlign: 'right', width: '100%'}}>
          {GetStats('hp')} HP
        </PokemonStats>
        <PokemonImage
          style={{
            backgroundImage: pokemonPhoto,
          }}
        />
        <PokemonName>{pokemonInfos?.name || '-'}</PokemonName>
        <Row style={{width: '90%'}}>
          <Row title={'Speed'}>
            <SpeedIcon />
            <PokemonStats>{GetStats('speed')}</PokemonStats>
          </Row>
          <Row title={'Attack'}>
            <AttackIcon />
            <PokemonStats>{GetStats('attack')}</PokemonStats>
          </Row>
          <Row title={'Defense'}>
            <DefenseIcon />
            <PokemonStats>{GetStats('defense')}</PokemonStats>
          </Row>
        </Row>
        <PokemonTypes>{typesString}</PokemonTypes>
      </CardContainer>
    </Link>
  ) : (
    <CardContainer
      style={{background: 'var(--background-color)', cursor: 'default'}}
    />
  );
};
