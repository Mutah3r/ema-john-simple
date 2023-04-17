import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    console.log(from);

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        signIn(email, password)
            .then(res => {
                // console.log(res.user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input type="submit" className='btn-submit' value="Login" />
            </form>
            <p><small>New to Ema-John? <Link to='/signup'>Create new account</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Login;