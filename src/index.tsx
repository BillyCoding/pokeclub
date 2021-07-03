import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from './routes';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Router />
  </BrowserRouter>,
  document.getElementById('root'),
);
