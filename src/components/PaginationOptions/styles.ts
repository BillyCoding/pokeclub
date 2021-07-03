import styled from 'styled-components';
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 48px;
  padding: 0 64px;
  background-color: transparent;
  height: 40px;
`;

export const DirectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  height: 100%;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s ease-out;
  border-color: var(--primary);
  margin: 0 8px;

  :hover {
    background-color: var(--primary);
  }
`;

export const NextIcon = styled(FiArrowRight)`
  width: 24px;
  height: 24px;
  color: var(--description);
`;

export const BackIcon = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  color: var(--description);
`;

export const PageNumber = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: var(--description);
`;

