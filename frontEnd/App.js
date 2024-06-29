import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Anuncio from './pages/Anuncio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import AnuncioDetails from './pages/AnuncioDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ads" component={Anuncio} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registro} />
        <Route exact path="/ads/:id" component={AnuncioDetails} />
      </Switch>
    </Router>
  );
}

export default App;
