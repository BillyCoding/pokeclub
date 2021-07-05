import React from 'react';

import {Logo} from './styles';

interface ILogoText {
  fontSize?: number;
  color?: string;
}

export const LogoText = ({
  fontSize = 28,
  color = 'var(--primary)',
}: ILogoText) => {
  return (
    <Logo
      style={{
        fontSize: fontSize,
        color: color,
      }}>
      Poke
      <span
        style={{
          opacity: 0.7,
          fontWeight: 400,
        }}>
        club
      </span>
    </Logo>
  );
};
