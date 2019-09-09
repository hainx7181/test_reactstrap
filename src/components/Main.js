import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const Main = () => (
  <div className="containder">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/product' component={ Products }/>
      <Route path='/schedule' component={ () => <div>schedule</div> }/>
    </Switch>
  </div>
)

export default Main;