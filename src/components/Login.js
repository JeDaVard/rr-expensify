import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

function Login({ isAuthenticated, startLogin }) {
    return (
        <div className={'login'} hidden={isAuthenticated}>
            <h3>Get your expenses under control</h3>
            <p>JOIN TO EXPENSIFY</p>
            <button className={'loginButton'} onClick={startLogin}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin()),
    }
};
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)