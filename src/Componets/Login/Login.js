import React from 'react'
// import Regis from '../Regis/Regis';
// import PropTypes from 'prop-types';

function Login() {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <td> Email</td>
                        <td><input type='email' name='email' /></td>
                    </tr>
                    <tr>
                        <td> Password</td>
                        <td><input type='password' name='password' /></td>
                    </tr>
                    <tr>
                        <td> <button>Login</button>  </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Login

