import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
   return (
       <header id='Navbar'>
         <ul className='nav-links'>
             <li>
                 <NavLink to='/' exact activeClassName='active-class'>Home</NavLink>
             </li>
             <li>
                 <NavLink to='/login' exact activeClassName='active-class'>Login</NavLink>
             </li>
         </ul>
       </header>
   )
}


export default Navbar;