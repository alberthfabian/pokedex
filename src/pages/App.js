import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss'
import PokeCards from '../pages/PokeCards';
import Home from '../pages/Home';
import { ServerProvider} from '../components/Context/server';

const App = () => (
  <ServerProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/index/cards' component={ PokeCards } />
        <Route exact path='/' component={ Home } />
      </Switch>
    </BrowserRouter>
  </ServerProvider>
);

export default App;
