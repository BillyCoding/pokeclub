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
