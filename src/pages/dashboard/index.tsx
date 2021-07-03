import React, {useState} from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {Header} from '../../components/Header';
import {DashboardContainer, PokemonsContainer, SearchTitle} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {AppStore} from '../../store/types';
import {useEffect} from 'react';
import {GetPokemons} from '../../store/ducks/pokemons/actions';
import {CardPokemon} from '../../components/Cards/CardPokemon';
import {Container, Row, Col} from 'react-grid-system';
import {useDebounce} from 'use-debounce';
import {IPokemonInfos} from '../../store/ducks/pokemons/types';
import {PaginationOptions} from '../../components/PaginationOptions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [searchText] = useDebounce(search, 600);
  const [currentPage] = useDebounce(page, 150);

  const [searchResult, setSearchResult] = useState<IPokemonInfos>();
  const [loadingSearch, setLoadingSearch] = useState(false);

  const {
    pokemons: {data: pokemons, loading},
  } = useSelector((state: AppStore) => state);

  useEffect(() => {
    if (searchText.length > 1) {
      setLoadingSearch(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data: IPokemonInfos) => {
          console.log(data);
          setSearchResult(data);
          setLoadingSearch(false);
        })
        .catch((err) => {
          setLoadingSearch(false);
          setSearchResult(undefined);
          console.log('Error:', err);
        });
    }
  }, [searchText]);


  useEffect(() => {
    dispatch(GetPokemons({page: currentPage, limit}));
  }, [currentPage, limit]);

  const ListPokemons: any[] = loading ? [...Array(limit)] : pokemons;

  return (
    <>
      <DashboardContainer>
        <Header search={search} setSearch={setSearch} />

        <PokemonsContainer>
          <Scrollbars style={{display: 'flex'}}>
            <Container fluid style={{padding: 48, paddingTop: 24}}>
              {search.length > 0 && (
                <SearchTitle>Resultados para "{search}"</SearchTitle>
              )}
              <Row>
                {search.length === 0 ? (
                  ListPokemons.map((item, index) => (
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
                  ))
                ) : (
                  <Col
                    xs={12}
                    md={3}
                    style={{display: 'flex', justifyContent: 'center'}}>
                    <CardPokemon value={searchResult} skeleton={loading} />
                  </Col>
                )}
              </Row>
            </Container>
            {search.length === 0 && (
              <PaginationOptions page={page} setPage={setPage} />
            )}
          </Scrollbars>
        </PokemonsContainer>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
