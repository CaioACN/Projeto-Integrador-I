import React from 'react'
import './App.css';
import Header from './components/header/header';
import  Routes from './routes';
import Login from '../src/pages/Login' ;
import Usuario from '../src/pages/usuario/criar/index';
import DataBase from './database/database';
import Config from './config/config';

function App() {
  return (
    <div className="App">
      <Login/>
      <Header/>
      <Routes/>
      <Usuario/>
      <DataBase/>
      <Config/>
      

    </div>
  );
}

export default App;

