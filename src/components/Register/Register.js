import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
             <div className="shadow rounded bg-white p-5 m-5">
                <h2 className="text-dark">Create New Account</h2>
                <form onSubmit="">
                    <input className="border border-dark rounded m-2" type="email" name="" id="" placeholder="Enter your email" />
                    <br/>
                    <input className="border border-dark rounded m-2" type="password" name="" id="" placeholder="Enter your password" />
                    <br/>
                    <input className="border border-dark rounded m-2" type="password" name="" id="" placeholder="Re-enter your password" />
                    <br/>
                    <input className="btn btn-warning m-3 text-dark" type="submit" value="Submit" />
                    <br/>
                </form>
                <h6>Already have an account? <Link to="/login">Login</Link></h6>
                <br/>
                <div>-------------or------------</div>
                <button className="btn btn-warning text-dark m-2">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;