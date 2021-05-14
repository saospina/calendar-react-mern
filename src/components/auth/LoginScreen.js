import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { startLoginEmailPass, startRegister } from '../../thunks/authThunk';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: "",
        lPassword: ""
    });
    const { lEmail, lPassword } = formLoginValues;

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: '',
        rEmail: "@gmail.com",
        rPassword1: "",
        rPassword2: ""
    });
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPass(lEmail, lPassword))
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (rPassword1 !== rPassword2) {
            return Swal.fire("Email", 'Both passwords must match', 'warning')
        } else {
            dispatch(startRegister(rName, rEmail, rPassword1))
        }
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-1"
                                placeholder="Email"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mb-1"
                                placeholder="Password"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-1"
                                placeholder="Name"
                                autoComplete="off"
                                name="rName"
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control mb-1"
                                placeholder="Email"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mb-1"
                                placeholder="Password"
                                autoComplete="off"
                                name="rPassword1"
                                value={rPassword1}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mb-1"
                                placeholder="Password"
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Create account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}