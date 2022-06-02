import React from 'react'
import {auth} from '../config/Config'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background-color: #029930;
    padding: 10px 30px;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [parola, setParola] = useState('');
    const [error, setError] = useState('');

    const logare = () => {
        signInWithEmailAndPassword(auth, email, parola).catch(err => setError(err.message));
      };
      
    return(
        <div>
        <div className='container'>
        <br />
        <h2>Logare</h2>
        <br />
        <form autoComplete="off" className='form-group' onSubmit={logare}>
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' required
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <label htmlFor="parola">Parolă</label>
            <input type="password" className='form-control' required
                onChange={(e) => setParola(e.target.value)} value={parola} minLength='8'/>
            <br />
            <Button type="submit"  className='btn btn-success btn-md mybtn' >Loghează-te!</Button>
        </form>
        {error && <span className='error-msg'>{error}</span>}
        <br/>
        <span>Nu ai un cont de utilizator?
        <br/>
        <Link to='/autentificare'><Button type='autentificare' className='btn btn-success btn-md mybtn'> Înregistrează-te!</Button></Link>
        </span>
    </div>
        </div>
    )
}