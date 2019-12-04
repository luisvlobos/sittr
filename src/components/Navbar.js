import React from 'react';
import {
    Link
  } from "react-router-dom";

function Navbar() {
  return (
        <nav className="navbar">
            <div className="container">
            <Link to="/"><span>Sittr</span></Link>
            <ul className="nav">
                <li ><Link to="/join" className="join">Join now</Link></li>
                <li ><Link to="/login" className="login">LOG IN</Link></li>
            </ul>
            </div>
        </nav>
  );
}

export default Navbar;