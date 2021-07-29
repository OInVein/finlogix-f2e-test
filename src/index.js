import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
