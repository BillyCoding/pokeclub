import styled from 'styled-components';
import {GiBroadsword, GiBloodySword} from 'react-icons/gi';
import {BsFillShieldFill} from 'react-icons/bs';
import {IoIosFlash} from 'react-icons/io';
import {ImShield} from 'react-icons/im';

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #fafafa;
  margin-left: 8px;
`;

export const DefenseIcon = styled(BsFillShieldFill)`
  width: 24px;
  height: 24px;
  color: #eee;
  margin-right: 8px;
`;

export const SpeedIcon = styled(IoIosFlash)`
  width: 24px;
  height: 24px;
  color: #eee;
  margin-right: 8px;
`;

export const AttackIcon = styled(GiBroadsword)`
  width: 24px;
  height: 24px;
  color: #eee;
  margin-right: 8px;
`;

export const SpecialAttackIcon = styled(GiBloodySword)`
  width: 24px;
  height: 24px;
  color: #eee;
  margin-right: 8px;
`;

export const SpecialDefenseIcon = styled(ImShield)`
  width: 24px;
  height: 24px;
  color: #eee;
  margin-right: 8px;
`;

export const StatsContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 64px;
`;


export const StatsBar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background-color: #EEE;
  margin: 12px 0;
`;
