import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

export const Container = styled.div`
  grid-area: H;
  display: flex;
  flex-direction: row;
  padding: 0 64px;
  border-bottom: 1.37px solid #e9e9e9;
  background-color: white;
  z-index: 999;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 12px;
  cursor: pointer;
  background-color: #ffffff;
`;

export const HeaderNav = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  margin: 0 24px;
  color: var(--description);
  transition: color 0.15s ease-in;

  :hover {
    color: var(--secondary);
  }
`;

export const SearchContainer = styled.div`
  padding: 0 16px;
  color: black;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #cbcbcb;
  z-index: 1;
  &:hover {
    border: 1px solid var(--primary);
  }
`;

export const SearchBox = styled.input`
  padding: 0 24px;
  color: black;
  width: 264px;
  height: 48px;
  z-index: 1;
  transition: width 0.2s ease-in;

  &:focus {
    width: 320px;
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 24px;
  height: 24px;
  color: var(--description);
`;
