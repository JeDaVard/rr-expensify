import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

function Login({ isAuthenticated, startLogin }) {
    return (
        <div>
            <button onClick={startLogin} hidden={isAuthenticated}>Login</button>
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