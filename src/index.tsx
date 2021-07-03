import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyles from './styles/global';
import store from './store';
import Router from './routes';

ReactDOM.render(
  <PersistGate persistor={store.persistor}>
    <Provider store={store.store}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </Provider>
  </PersistGate>,
  document.getElementById('root'),
);
