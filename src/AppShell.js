import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Home  from './views/Home';
import Cadastro from './views/Cadastro';
import Login from './views/Login';
import Principal from './views/Principal';

class AppShell extends Component {
  render() {
    return (
      <div>    

        <Switch>
          <Route exact path='/' component={ Home } />         
          <Route path='/cadastro' component={ Cadastro } />
          <Route path='/login' component={ Login } />
          <Route path='/principal' component={ Principal } />         
        </Switch>

      </div>
    );
  }
}

export default AppShell;
