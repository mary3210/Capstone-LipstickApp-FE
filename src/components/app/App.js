import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import EditPost from '../EditPost/EditPost';
import PostDetail from '../PostDetail/PostDetail';
import CreatePost from '../CreatePost/CreatePost';
import CollectionList from '../Collection/Collection';
import ShowCollection from '../ShowCollection/ShowCollection'

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route exact path='/post/:id/edit' element= { <EditPost/>}/>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post" element={<CreatePost/>} />
        <Route path="/collection" element={<CollectionList/>} />
        <Route path="/collection/:id" element={<ShowCollection/>} />
        </Routes>
        
        
    </div>
  );
}

export default App;
