import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./views/Header";
import Navbar from "./views/Navbar";
import EditPost from "./components/EditPost";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import CollectionList from "./components/Collection";
import ShowCollection from "./components/ShowCollection";

function App() {
  return (
    <div className="Container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/collection" element={<CollectionList />} />
        <Route path="/collection/:id" element={<ShowCollection />} />
      </Routes>
    </div>
  );
}

export default App;
