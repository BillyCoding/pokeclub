import React from 'react';
import {IPokemonStats} from '../../store/ducks/pokemons/types';

import {
  StatsContainer,
  AttackIcon,
  DefenseIcon,
  SpeedIcon,
  Title,
  StatsBar,
  SpecialAttackIcon,
  SpecialDefenseIcon,
} from './styles';

interface ILogoText {
  pokemonStats?: IPokemonStats[] | undefined;
}

export const PokemonStats = ({pokemonStats}: ILogoText) => {
  const GetStats = (stats: string) =>
    (pokemonStats &&
      pokemonStats.find((s) => s.stat.name === stats)?.base_stat) ||
    0;

  const statsList = [
    {
      Icon: SpeedIcon,
      title: 'Velocidade',
      base_stat: GetStats('speed') || 0,
      color: '#FFA800',
    },
    {
      Icon: AttackIcon,
      title: 'Ataque',
      base_stat: GetStats('attack') || 0,
      color: '#FF1F00',
    },
    {
      Icon: DefenseIcon,
      title: 'Defesa',
      base_stat: GetStats('defense') || 0,
      color: '#0085FF',
    },
    {
      Icon: SpecialAttackIcon,
      title: 'Ataque especial',
      base_stat: GetStats('special-attack') || 0,
      color: '#FF6B00',
    },
    {
      Icon: SpecialDefenseIcon,
      title: 'Defesa especial',
      base_stat: GetStats('special-defense') || 0,
      color: '#0038FF',
    },
  ];

  return (
    <StatsContainer>
      {statsList.map((item, index) => (
        <div key={index} style={{marginBottom: 32, width: 400}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <item.Icon />
            <Title>
              {item.title} - {item.base_stat}
            </Title>
          </div>
          <StatsBar>
            <StatsBar
              style={{
                backgroundColor: item.color,
                width: `${(100 * item.base_stat) / 180}%`,
              }}
            />
          </StatsBar>
        </div>
      ))}
    </StatsContainer>
  );
};
