import React from 'react';
import ReactDOM from 'react-dom';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'

import './index.css';
import App from './pages/Home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
  <Switch>

    <Route path = "/" component = {App} exact /> 
    <Route path = "/cadastro/video" component = {CadastroVideo} />
    <Route path = "/cadastro/categoria" component = {CadastroCategoria} />
    <Route component = {() =>(<div>pag. err</div>)} />

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

