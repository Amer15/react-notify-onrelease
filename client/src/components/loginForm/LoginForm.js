import React, { Fragment, useState } from 'react';
import axios from 'axios';
import packageJson from '../../../package.json';
import { getBuildDate } from '../../utils/utils';
import Navbar from '../navbar/Navbar';
import './LoginForm.css';
import Modal from '../modal/Modal';
import { url } from '../../utils/api';
import { getCookie } from '../../utils/helper';



const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsgs, setErrorMsgs] = useState(null);
    const [successMsgs, setSuccessMsgs] = useState('');



    const hideMsg = () => {
        setErrorMsgs(null);
        setSuccessMsgs(null);
    }
    


    const onSubmitHandler = e => {
        e.preventDefault();
        setLoading(true);

        const userData = {
           email: email,
           password: password
        }

        const clientbuilddate = getCookie('buildDate');
        console.log('clientbuilddate : ' + clientbuilddate);

        axios.post(`${url}/add-user`, userData, {
          headers:{
              'Content-Type':'application/json',
              'clientbuilddate': clientbuilddate
          }
        })
        .then( data => {
            console.log(data);
            setEmail('');
            setPassword('');
            setLoading(false);
            setSuccessMsgs(data.data.message);
        })
        .catch(err => {
           console.log(err.response.status);
           if(err.response.status === 403) {
               setShowModal(true);
               setErrorMsgs(err.response.data.message);
           }
           setLoading(false);
        });   
    }   

    return (
        <Fragment>
            <Navbar />
            {errorMsgs ? <p id='error' onClick={hideMsg}>{errorMsgs}</p> : null}
            {successMsgs ? <p id='success' onClick={hideMsg}>{successMsgs}</p> : null}
            <div id="Form-container">
                <h2>Sign up</h2>
                <br />
                <p id='build-date'>Build date: {getBuildDate(packageJson.buildDate)}, app version 1.0.1</p>
                <br />
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" autoComplete="off"
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"
                        value={password} onChange={e => setPassword(e.target.value)} />
                    <button>{loading ? 'Loging in..' : 'Login'}</button>
                </form>
            </div>
            <Modal msg="A new version available, please click on update" showModal={showModal}/>
        </Fragment>
    )

}

export default LoginForm;