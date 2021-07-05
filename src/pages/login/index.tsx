import React, {useState} from 'react';
import {
  DashboardContainer,
  LeftContainer,
  RightContainer,
  Slogan,
  LeftSideBanner,
  FormContainer,
  FormTitle,
  Subtitle,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {AppStore} from '../../store/types';
import {InputText} from '../../components/InputText';
import {ButtonDefault} from '../../components/ButtonDefault';
import {LogoText} from '../../components/LogoText';
import {PostUser} from '../../store/ducks/users/actions';
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const randomPokemonId = Math.floor(Math.random() * 30);

  const [pokeBanner, setPokeBanner] = useState(`url("https://pokeres.bastionbot.org/images/pokemon/${randomPokemonId}.png")`);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    user: {data: user, loading, error},
  } = useSelector((state: AppStore) => state);

  const handleLogin = () => {
    dispatch(PostUser({username, password}));
  };

  useEffect(() => {
    if (user.token) {
      history.push('/')
    }
  }, [user])

  return (
    <>
      <DashboardContainer>
        <LeftContainer>
          <LogoText color={'#FFF'} />
          <Slogan>
            Descubra tudo sobre <span style={{color: '#FFF'}}>pokemons</span>
          </Slogan>
          <LeftSideBanner
            style={{
              backgroundImage: pokeBanner,
            }}
          />
        </LeftContainer>
        <RightContainer>
          <FormContainer>
            <FormTitle>Entrar</FormTitle>
            <Subtitle>Faça login para acessar os pokemons</Subtitle>
            <InputText
              title={'Seu nome de usuário'}
              value={username}
              setChangeText={setUsername}
              maxLength={80}
            />
            <InputText
              title={'Sua senha'}
              value={password}
              setChangeText={setPassword}
              maxLength={32}
              type={'password'}
            />

            <ButtonDefault
              onClick={handleLogin}
              title={'Entrar'}
              loading={loading}
            />
          </FormContainer>
        </RightContainer>
      </DashboardContainer>
    </>
  );
};

export default Login;
