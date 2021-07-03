import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {Header} from '../../components/Header';
import {Container, PokemonsContainer} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {AppStore} from '../../store/types';
import {useEffect} from 'react';
import {GetPokemons} from '../../store/ducks/pokemons/actions';
import {CardPokemon} from '../../components/Cards/CardPokemon';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    pokemons: {data: pokemons},
  } = useSelector((state: AppStore) => state);

  useEffect(() => {
    dispatch(GetPokemons());
  }, []);

  return (
    <>
      <Scrollbars>
        <Container>
          <Header />
          <PokemonsContainer>
            {pokemons.map((item) => (
              <CardPokemon url={item?.url} />
            ))}
          </PokemonsContainer>
        </Container>
      </Scrollbars>
    </>
  );
};

export default Dashboard;
