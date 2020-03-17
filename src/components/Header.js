import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
    <header>
            <h1>Expensify</h1>
            <NavLink to={'/dashboard'} activeClassName={'is-active'} exact={true} >Dashboard</NavLink>
            <NavLink to={'/create'} activeClassName={'is-active'} exact={true} >Create</NavLink>
            <NavLink to={'/help'} activeClassName={'is-active'} exact={true} >Help</NavLink>
            <NavLink to={'/about'} activeClassName={'is-active'} exact={true} >About</NavLink>
            {props.isAuthenticated && <button onClick={props.startLogout}>Logout</button>}
    </header>
);

const mapDispatchToProps = dispatch => ({
        startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => ({
        isAuthenticated: !!state.auth.uid
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);