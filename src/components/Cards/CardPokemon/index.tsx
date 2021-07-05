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
import api from '../../../services/api';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store/types';

interface ICardPokemon {
  pokemonId?: string;
  value?: IPokemonInfos;
  skeleton?: boolean;
}

export const CardPokemon = ({
  pokemonId = '',
  value,
  skeleton,
}: ICardPokemon) => {
  const [pokemonInfos, setPokemonInfos] = useState<IPokemonInfos>();
  const [loading, setLoading] = useState(false);

  const {
    user: {data: {token}}
  } = useSelector((state: AppStore) => state);

  useEffect(() => {
    if (value) {
      setPokemonInfos(value);
      console.log(value);
    } else {
      setLoading(true);
      if (pokemonId.length > 1) {
        api
        .get(`/pokemon/${pokemonId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPokemonInfos(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log('Error:', err);
        });
      }
    }
  }, [pokemonId, value]);

  const GetStats = (stats: string) =>
    pokemonInfos?.stats.find((s) => s.stat.name === stats)?.base_stat || '-';

  const types = pokemonInfos?.types.map((t) => t.type.name);

  const typesString = types ? types.join(' • ') : '- • -';

  return !skeleton && !loading ? (
    <Link to={`/pokemon/${pokemonId}`}>
      <CardContainer>
        <PokemonStats style={{textAlign: 'right', width: '100%'}}>
          {GetStats('hp')} HP
        </PokemonStats>
        <PokemonImage
          style={{
            backgroundImage: `url(${pokemonInfos?.photo})`,
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
