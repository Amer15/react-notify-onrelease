import React, { Fragment, useState } from 'react';
import packageJson from '../../../package.json';
import { getBuildDate } from '../../utils/utils';
import Navbar from '../navbar/Navbar';
import './LoginForm.css';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        alert(` UserEmail : ${email} , UserPassword : ${password}`);
        setPassword('');
        setEmail('');
    }

    return (
        <Fragment>
            <Navbar />
            <div id="Form-container">
                <h1>React app version 1.0.5</h1>
                <br />
                <p>Build date: {getBuildDate(packageJson.buildDate)}</p>
                <br />
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"
                        value={password} onChange={e => setPassword(e.target.value)} />
                    <button>Login</button>
                </form>
            </div>
        </Fragment>
    )

}

export default LoginForm;