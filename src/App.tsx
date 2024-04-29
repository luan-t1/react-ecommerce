import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './elements/pages/shop';
import Home from './elements/pages/home';
import ProductDetail from './elements/pages/productDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop/:id" element={<Shop/>}/>
        <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
