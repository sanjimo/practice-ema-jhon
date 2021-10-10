import React from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location =useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <div className="shadow rounded bg-white p-5 m-5">
                <h2 className="text-dark">Login</h2>
                <form onSubmit="">
                    <input className="border border-dark rounded m-2" type="email" name="" id="" placeholder="Enter your email" />
                    <br/>
                    <input className="border border-dark rounded m-2" type="password" name="" id="" placeholder="Enter your password" />
                    <br/>
                    <input className="btn btn-warning m-3 text-dark" type="submit" value="Login" />
                    <br/>
                </form>
                <h6>New to ema-jhon? <Link to="/register">Create an account</Link></h6>
                <br/>
                <div>-------------or------------</div>
                <button
                onClick={handleGoogleLogin}
                className="btn btn-warning text-dark m-2"
                >Google Sign In</button>
            </div>
        </div>
    );
}

export default Login;