import React, {useState} from 'react';

import {
  Container,
  HeaderNav,
  HeaderDiv,
  SearchBox,
  SearchContainer,
  SearchIcon,
  UserName,
} from './styles';
import {Link, useHistory} from 'react-router-dom';
import {LogoText} from '../LogoText';
import {useDispatch, useSelector} from 'react-redux';
import {AppStore} from '../../store/types';
import {UserLogout} from '../../store/ducks/users/actions';

interface IHeader {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
interface IRenderRoutes {
  pathname: string;
  title: string;
}

export const Header = ({search, setSearch}: IHeader) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    user: {
      data: {user},
    },
  } = useSelector((state: AppStore) => state);

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

  const headerRoutes = [{pathname: '/', title: 'Dashboard'}];

  const handleLogout = () => {
    dispatch(UserLogout());
  };

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
        <UserName title={'Sair'} onClick={handleLogout}>
          {user.name}
        </UserName>
      </HeaderDiv>
    </Container>
  );
};
