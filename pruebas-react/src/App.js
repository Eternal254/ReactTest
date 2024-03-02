import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Default from './pages/Default';
import Carousel from './pages/Carousel';
import Footer from './pages/Footer';


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About/>}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='carousel' element={<Carousel/>}></Route>
          <Route path='*' element={<Default/>}></Route>
        </Route>
      </Routes>
      {isHomePage && <Carousel />}
      <Footer />
    </div>
  );
}

export default App;
