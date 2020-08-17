import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './style/theme';
import {BoxAnimation} from './components/Animation';
import * as serviceWorker from './serviceWorker';

import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <BoxAnimation>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BoxAnimation>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
