import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px auto;
  grid-template-areas: 'H' 'M';
`;

export const PokemonsContainer = styled.div`
  grid-area: M;
  display: flex;
  justify-content: center;
`;

export const SearchTitle = styled.h1`
  color: #fff;
  font-weight: 550;
  font-size: 20px;
  margin: 8px;
`;
