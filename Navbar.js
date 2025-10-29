import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){ return (<nav style={{padding:10,borderBottom:'1px solid #ddd'}}><Link to='/' style={{marginRight:10}}>Home</Link><Link to='/vendor-dashboard' style={{marginRight:10}}>Vendor Dashboard</Link><Link to='/login'>Login</Link></nav>); }
