import styled from 'styled-components';
import {GiBroadsword} from 'react-icons/gi';
import {BsFillShieldFill} from 'react-icons/bs';
import {IoIosFlash} from 'react-icons/io';

export const CardContainer = styled.div`
  width: 350px;
  height: 495px;
  background: var(--primary-gradient);
  border-radius: 5px;
  margin: 24px 8px;
  padding: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 10px 35px rgba(0, 0, 0, 0.6);
  opacity: 0.9;
  transition: opacity 0.5s ease-out;

  :hover {
    opacity: 1;
  }
`;

export const PokemonImage = styled.span`
  width: 240px;
  height: 240px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PokemonName = styled.h1`
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 24px;
`;

export const PokemonStats = styled.h2`
  color: #eee;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
`;

export const DefenseIcon = styled(BsFillShieldFill)`
  width: 20px;
  height: 20px;
  color: #eee;
  margin-right: 8px;
`;

export const SpeedIcon = styled(IoIosFlash)`
  width: 20px;
  height: 20px;
  color: #eee;
  margin-right: 8px;
`;

export const AttackIcon = styled(GiBroadsword)`
  width: 20px;
  height: 20px;
  color: #eee;
  margin-right: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonTypes = styled.h2`
  color: #eee;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
`;
