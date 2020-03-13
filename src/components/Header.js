import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={'/'} activeClassName={'is-active'} exact={true} >Dashboard</NavLink>
        <NavLink to={'/create'} activeClassName={'is-active'} exact={true} >Create</NavLink>
        <NavLink to={'/help'} activeClassName={'is-active'} exact={true} >Help</NavLink>
        <NavLink to={'/about'} activeClassName={'is-active'} exact={true} >About</NavLink>
    </header>
);

export default Header;