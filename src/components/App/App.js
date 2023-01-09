import React from 'react'
import './App.css';
import Header from '../pages/Header';
import ArticleList from '../pages/ArticleList';
import OneArticle from '../pages/OneArticle';
import Fn from '../pages/fn';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <div className='wrapper'>
    <Header />
    <Routes>
      <Route
        path ="/"
        element ={<ArticleList />}
      />
      <Route
        path ="/articles"
        element ={<ArticleList />}
      />
      <Route
        path ="/articles/:id"
        element ={<OneArticle />}
      />
      <Route
        path ="/hanter"
        element ={<Fn />}
      />
    </Routes>
    
  </div>
)

export default App;
