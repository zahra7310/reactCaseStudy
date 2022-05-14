import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


export const Header = () => {
  return( 
      <header className='header'>
       <h2>React Case Study </h2>
        <nav className='nav'> 
          <ul>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="tutorials">Tutorials</NavLink></li>
             <li><NavLink to="UsersPage">React Users Page</NavLink></li>
             <li><NavLink to="PostPage">Post Page</NavLink></li>
          </ul>
         </nav>  
      </header>    
  )
};
