import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Modem_router from '../pages/modem_router'
import Networking from '../pages/Networking';
import Mysql from '../pages/Mysql';
import Osi from '../pages/osi';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/> } />
        <Route path="/modem_router" element={<Modem_router/>} />
        <Route path="/osi" element={<Osi />} />
        <Route path="/networking" element={<Networking />} />
        <Route path='/mysql' element={<Mysql />} />
    </Routes>
  )
};

export default Routers