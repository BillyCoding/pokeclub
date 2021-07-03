import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {LogoText} from '../../components/LogoText';
import {Container} from './styles';

const Dashboard = () => {
  return (
    <>
      {/* <Scrollbars> */}
        <Container>
          <LogoText />
        </Container>
      {/* </Scrollbars> */}
    </>
  );
};

export default Dashboard;
