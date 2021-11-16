import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Error404 from './pages/Error404'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'

import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
 
