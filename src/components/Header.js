import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Welcome</h1>
        <p>Thi sis my site. Take a look around</p>
        <NavLink to='/' exact={true}>Home</NavLink>
        <NavLink to='/portfolio/:id'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
)

export default Header;