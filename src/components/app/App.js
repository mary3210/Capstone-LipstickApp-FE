import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import EditPost from '../EditPost/EditPost';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route exact path='/post/:id' element= { <EditPost/>}/>

        </Routes>
        <Header/>
        <Navbar/>
    </div>
  );
}

export default App;
