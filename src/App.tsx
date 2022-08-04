import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AirportDetailPage from './pages/AirportDetailPage';
import Auth from './pages/Auth';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
      <Navigation/>
     <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/airport/:id' element={<AirportDetailPage/>}></Route>
     </Routes>
    </>
  );
}

export default App;
