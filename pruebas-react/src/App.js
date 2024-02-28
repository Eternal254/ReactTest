import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Default from './pages/Default';

function App() {
  return (
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='*' element={<Default/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
