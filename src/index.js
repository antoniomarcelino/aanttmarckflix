import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route component={Home}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

