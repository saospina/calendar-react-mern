import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startLoginEmailPass } from '../../thunks/authThunk';
import './login.css';

export const LoginScreen = () => {

    const [formLoginValues, handleLoginInputChange, reset] = useForm({ lEmail: "antonio@gmail.com", lPassword: "123456" });
    const { lEmail, lPassword } = formLoginValues;
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPass(lEmail,lPassword))
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
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-1"
                                placeholder="Name"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control mb-1"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mb-1"
                                placeholder="Password"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mb-1"
                                placeholder="Password"
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