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

interface RouteParams {
  pokemonId: string;
}

const Pokemon = () => {
  const {pokemonId} = useParams<RouteParams>();

  const [pokemon, setPokemon] = useState<IPokemonInfos>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pokemonId) {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data: IPokemonInfos) => {
          console.log('\x1b[32mGET POKEMON', pokemonId);
          setPokemon(data);
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

  const pokemonPhoto = pokemon?.id
    ? `url("https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png")`
    : `url("https://s2.coinmarketcap.com/static/img/coins/200x200/8303.png")`;

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
                  backgroundImage: pokemonPhoto,
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
