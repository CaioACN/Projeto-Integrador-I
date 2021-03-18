import React from 'react'
import './App.css';
import Header from '../src/components/header';
import Routes from './routes';
import Login from '../src/pages/Login' ;

function App() {
  return (
    <div className="App">
      <Login/>
      <Header/>
      <Routes/>

    </div>
  );
}




export default App;

