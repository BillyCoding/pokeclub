import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 350px;
  height: 495px;
  background-color: var(--primary-gradient);
  border-radius: 5px;
  margin: 24px 8px;
  cursor: pointer;

  :hover {
    opacity: 0.95;
  }
`;

export const PokemonName = styled.h1`
  text-align: center;
  color: #fff;
  text-transform: capitalize;
`;
