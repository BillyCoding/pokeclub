import React, {useState} from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {
  DashboardContainer,
  BackButton,
  BackIcon,
  PokemonName,
  Header,
  PokemonImage,
} from './styles';
import {useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {IPokemonInfos} from '../../store/ducks/pokemons/types';
import {useParams} from 'react-router-dom';
import {PokemonStats} from '../../components/PokemonStats';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/types';

interface RouteParams {
  pokemonId: string;
}

const Pokemon = () => {
  const {pokemonId} = useParams<RouteParams>();

  const [pokemon, setPokemon] = useState<IPokemonInfos>();
  const [loading, setLoading] = useState(false);

  const {
    user: {data: {token}}
  } = useSelector((state: AppStore) => state);

  useEffect(() => {
    if (pokemonId) {
      setLoading(true);

        api
        .get(`/pokemon/${pokemonId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log('\x1b[32mGET POKEMON', pokemonId);
          setPokemon(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('\x1b[31mERRO NO GET POKEMON', pokemonId);
          setLoading(false);
          setPokemon(undefined);
          console.log('Error:', err);
        });
    }
  }, [pokemonId]);
  return (
    <>
      <DashboardContainer>
        <Scrollbars style={{display: 'flex'}}>
          <Container fluid style={{padding: 36, paddingTop: 36}}>
            <Header>
              <BackButton to={'/'}>
                <BackIcon />
              </BackButton>
              <PokemonName>{pokemon?.name || '-'}</PokemonName>
            </Header>
            <div style={{display: 'flex', alignItems: 'center', marginTop: 48}}>
              <PokemonImage
                style={{
                  backgroundImage:  `url(${pokemon?.photo})`,
                }}
              />
              <PokemonStats pokemonStats={pokemon?.stats} />
            </div>
            <Row>
              <Col
                xs={12}
                md={3}
                style={{display: 'flex', justifyContent: 'center'}}></Col>
            </Row>
          </Container>
        </Scrollbars>
      </DashboardContainer>
    </>
  );
};

export default Pokemon;
