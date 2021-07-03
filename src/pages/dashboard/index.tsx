import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {Header} from '../../components/Header';
import {DashboardContainer, PokemonsContainer} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {AppStore} from '../../store/types';
import {useEffect} from 'react';
import {GetPokemons} from '../../store/ducks/pokemons/actions';
import {CardPokemon} from '../../components/Cards/CardPokemon';
import {Container, Row, Col} from 'react-grid-system';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    pokemons: {data: pokemons, loading},
  } = useSelector((state: AppStore) => state);

  const page = 10;
  const limit = 8;

  useEffect(() => {
    dispatch(GetPokemons({page, limit}));
  }, []);

  const ListPokemons: any[] = loading ? [...Array(limit)] : pokemons;

  return (
    <>
      <DashboardContainer>
        <Header />

        <PokemonsContainer>
          <Scrollbars>
            <Container fluid style={{padding: 48, paddingTop: 24}}>
              <Row>
                {ListPokemons.map((item, index) => (
                  <Col
                    key={index}
                    xs={12}
                    md={3}
                    style={{display: 'flex', justifyContent: 'center'}}>
                    <CardPokemon
                      url={loading ? '' : item?.url}
                      skeleton={loading}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Scrollbars>
        </PokemonsContainer>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
