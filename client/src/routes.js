import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Teste from './pages/Home/Home';
import './global.css';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Teste} />
        <Route exact path='/home' component={Teste} />
      </Switch>
    </BrowserRouter>
  );
}
