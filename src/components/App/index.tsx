import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {Header} from '../Header';
import {Blog} from '../Blog';
import {Contributors} from '../Contributors';
import {About} from '../About';

import './app.sass';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contributors">
          <Contributors />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
