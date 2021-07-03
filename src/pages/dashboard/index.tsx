import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {Header} from '../../components/Header';
import {Container} from './styles';

const Dashboard = () => {
  return (
    <>
      {/* <Scrollbars> */}
        <Container>
          <Header />
        </Container>
      {/* </Scrollbars> */}
    </>
  );
};

export default Dashboard;
