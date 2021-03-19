import Header from './components/Header'
import Beers from './components/Beers'
import BeerInfo from './components/BeerInfo'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/beer/:id'>
          <BeerInfo/>
        </Route>
        <Route exact path='/beer' component={Beers}>
        </Route>
        <Route exact path='/' component={Home}>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
