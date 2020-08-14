import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss'
import PokeCards from '../pages/PokeCards';
import PageStrong from './PageStrong';
import PageWeakness from '../pages/PageWeakness';
import PageLegendaries from '../pages/PageLegendaries';
import Home from '../pages/Home';
import { ServerProvider} from '../components/Context/server';
// import CardMainAttack from '../components/CardMainAttack/CardMainAttack';

const App = () => (
  <ServerProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/index/cards' component={ PokeCards } />
        <Route exact path='/' component={ Home } />
        <Route exact path='/index/strong' component={ PageStrong } />
        <Route exact path='/index/weakness' component={ PageWeakness } />
        <Route exact path='/index/legendaries' component={ PageLegendaries } />
        {/* <Route exact path='/index/defense' component={ PokeCards } /> */}
      </Switch>
    </BrowserRouter>
  </ServerProvider>
);

export default App;
