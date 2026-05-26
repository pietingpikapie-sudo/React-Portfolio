import React from 'react';
import { Link } from 'react-router-dom';

// Import portfolio logo image
 import Pizza1 from '../src/assets/pizza.png';

 export default function Layout() {
 return (
 <>
 {/* Portfolio image/logo */}
 <img src={Pizza1}alt="pizza" className="realpizza" width="80px" height="80px"/>

 {/* Main page title */}
 <h1>My Portfolio</h1>

 {/* Navigation menu */}
 <nav>

 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link
to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link
to="/contact">Contact</Link> | <Link to="/counter">Counter</Link>

 </nav>

 {/* Spacing and separator line */}
 <br/>
 <hr />

 </>

 );
 }