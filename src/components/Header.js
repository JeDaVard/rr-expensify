import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Button = ({ name }) => {
    return (
        <button>
            <div className={name}>

        </div>
        </button>
    )
};

const Header = (props) => (
    <header className={'logo'}>
                <div className={'logotype'}>
                    <Link to={'/dashboard'}>
                        <img src="img/favicon.png" alt="" width={'82px'}/>
                    </Link>
                        <h4>Expensify</h4>
                </div>
            <div className={'menu'}>
                <div>
                    <NavLink to={'/dashboard'} activeClassName={'asd'} exact={true} ><Button name={'Dashboard'}/></NavLink>
                </div>
                <div>
                    <NavLink to={'/create'} activeClassName={'asd'} exact={true} ><Button name={'Create'}/></NavLink>
                </div>
                {/*<NavLink to={'/help'} activeClassName={'is-active'} exact={true} >Help</NavLink>*/}
                {/*<NavLink to={'/about'} activeClassName={'is-active'} exact={true} >About</NavLink>*/}

                <div>
                    {props.isAuthenticated && <button onClick={props.startLogout}><div className={'Logout'}> </div></button>}
                </div>
            </div>
    </header>
);

const mapDispatchToProps = dispatch => ({
        startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => ({
        isAuthenticated: !!state.auth.uid
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);