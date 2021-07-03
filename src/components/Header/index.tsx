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

interface IRenderRoutes {
  pathname: string;
  title: string;
}

export const Header = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const RenderRouter = ({pathname, title}: IRenderRoutes) => {
    const RouteColor = (pathname: string) => {
      return pathname === history.location.pathname
        ? 'var(--primary)'
        : 'var(--description)';
    };
    return (
      <Link
        to={pathname}
        style={{height: 40, alignItems: 'center', display: 'flex'}}>
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
        {headerRoutes.map((item, index) => (
          <RenderRouter
            pathname={item.pathname}
            title={item.title}
            key={index}
          />
        ))}
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
