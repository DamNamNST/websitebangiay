import React from 'react';
import logo from '.logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Layoutclient from './pages/Layout/Layoutclient';
import 'antd/dist/antd.css';
import About from './pages/About/About';


import Products from './components/products';



function App() {
  
  return (

<Routes>
  <Route path= {'/'} element ={< Layoutclient />}>
    <Route index element = {< Homepage />} />

    <Route path={"/about"} element = {< About />} />
    <Route path={"/products"} element = {< Products />} />
  </Route>
</Routes>

  );
}

export default App;
