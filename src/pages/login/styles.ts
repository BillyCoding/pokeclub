import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: auto;
  grid-template-areas: 'L M';
`;

export const LeftContainer = styled.div`
  grid-area: L;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--background-color);
  padding: 64px 32px;
`;

export const RightContainer = styled.div`
  grid-area: M;
  display: flex;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Slogan = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 69px;
  margin: 48px 0 80px;
  color: #ddd;
`;

export const LeftSideBanner = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 24px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  transition: transform 0.2s ease-out;
`;

export const FormContainer = styled.div`
  width: 600px;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 36px;
  color: #010101;
`;

export const Subtitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 48px;
  cursor: pointer;
  color: var(--description);
`;
