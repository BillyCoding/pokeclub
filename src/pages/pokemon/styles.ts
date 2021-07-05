import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
  display: flex;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 56px;
  height: 56px;
  border: 2px solid var(--primary);
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s ease-out;
  margin: 0 8px;

  :hover {
    background-color: var(--primary);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BackIcon = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  color: var(--description);
`;

export const PokemonName = styled.h1`
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 32px;
  margin: 0 24px;
`;

export const PokemonImage = styled.span`
  width: 400px;
  height: 400px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: scale(0.95);
  justify-content: space-between;
  transition: transform 0.2s ease-out;
`;


