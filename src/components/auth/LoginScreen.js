import React from 'react';
import './login.css';

export const LoginScreen = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control mb-1"
                                placeholder="Email"
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