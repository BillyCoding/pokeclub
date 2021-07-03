import React, {useState} from 'react';

import {
  Container,
  HeaderNav,
  HeaderDiv,
  SearchBox,
  SearchContainer,
  SearchIcon,
} from './styles';
import {Link, useHistory} from 'react-router-dom';
import {LogoText} from '../LogoText';

export const Header = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const RenderRouter = (pathname: string, title: string) => {
    const RouteColor = (pathname: string) => {
      return pathname === history.location.pathname
        ? 'var(--primary)'
        : 'var(--description)';
    };
    return (
      <Link to={pathname} style={{height: 40, alignItems: 'center', display: 'flex'}}>
        <HeaderNav style={{color: RouteColor(pathname)}}>{title}</HeaderNav>
      </Link>
    );
  };

  const headerRoutes = [
    {pathname: '/', title: 'Dashboard'},
    {pathname: '/comparar', title: 'Comparar'},
  ];

  return (
    <Container>
      <HeaderDiv>
        <LogoText />
        {headerRoutes.map((item) => RenderRouter(item.pathname, item.title))}
      </HeaderDiv>
      <HeaderDiv>
        <SearchContainer>
          <SearchIcon />
          <SearchBox
            value={search}
            onChange={(i) => setSearch(i.target.value)}
            placeholder="Pesquisar pokemons"
          />
        </SearchContainer>
      </HeaderDiv>
    </Container>
  );
};
