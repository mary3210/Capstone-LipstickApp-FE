import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';


function App() {
  return (
    <div className="Container">
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        </Routes>
    </div>
  );
}

export default App;
