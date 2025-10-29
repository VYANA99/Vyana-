import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import VendorDashboard from './pages/VendorDashboard';
import Navbar from './components/Navbar';
export default function App(){ return (<><Navbar/><div style={{padding:20}}><Routes><Route path='/' element={<Home/>}/><Route path='/login' element={<Login/>}/><Route path='/vendor-dashboard' element={<VendorDashboard/>}/></Routes></div></>); }
