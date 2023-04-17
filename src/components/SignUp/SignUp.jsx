import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        setError('');
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters longer');
            return;
        }

        
        createUser(email, password)
        .then(res => {
            // console.log(res.user);
            form.reset();
        })
        .catch(error => setError(error.message))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input type="submit" className='btn-submit' value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;