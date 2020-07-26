import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Contato from './pages/contato';
import Adicionar from './pages/adicionar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/contato/:id" component={Contato}/>
      <Route path="/adicionar" component={Adicionar}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
/*
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Chat from './pages/chat';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/chat/:id' component={Chat}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
*/
