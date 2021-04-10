import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { CadastrarUsuario } from './components/CadastrarUsuario';
import  Login  from './components/Login';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/cadastrarusuario' component={CadastrarUsuario} />
        <Route path='/fetch-data' component={FetchData} />
        <Login exact path='/Login' component={Login} />
       
        
      </Layout>
    );
  }
}
