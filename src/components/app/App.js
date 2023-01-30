import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        </Routes>
        <Header/>
    </div>
  );
}

export default App;
