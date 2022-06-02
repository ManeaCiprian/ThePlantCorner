import React, { useState } from 'react'
import styled from 'styled-components'
import { db, auth } from '../config/Config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Button = styled.button`
    background-color: #029930;
    padding: 10px 30px;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`
export const SignUp = () => {

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [parola, setParola] = useState('');
    const [error, setError] = useState('');

    const SignUp = (e) => {
        const utilizatori = collection(db,'AutentificareUserData');
        console.log("Formular trimis!");
        console.log(nume,prenume,username,email,parola);
        createUserWithEmailAndPassword(
                auth,
                email,
                parola
            ).catch(err => setError(err.message));
        addDoc(utilizatori,{
                Nume: nume,
                Prenume: prenume,
                Username: username,
                Email: email,
                Parola: parola
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
            <br />
            <h2>Autentificare</h2>
            <hr />
            <form autoComplete='off' className='form-group' onSubmit={SignUp}>
                <label htmlFor='Nume'>Nume</label>
                <br />
                <input type={'text'} className='form-control' required
                    onChange={(e) => setNume(e.target.value)} value={nume} />
                <br />
                <label htmlFor='Prenume'>Prenume</label>
                <br />
                <input type={'text'} className='form-control' required
                    onChange={(e) => setPrenume(e.target.value)} value={prenume} />
                <br />
                <label htmlFor='Username'>Nume de utilizator</label>
                <br />
                <input type={'text'} className='form-control' required
                    onChange={(e) => setUsername(e.target.value)} value={username} />
                <br />
                <label htmlFor='Email'>Email</label>
                <br />
                <input type={'email'} className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor='Parola'>Parolă (folosiți doar litere)</label>
                <br />
                <input type={'password'} className='form-control' required
                    onChange={(e) => setParola(e.target.value)} value={parola} minLength='8'/>
                <br />
                <Button type='submit' className='btn btn-success btn-md mybtn'>Autentifică-te!</Button>
            </form>
            {error && <div className='error-msg'>{error}</div>}
            <br />
            <span>Ai deja un cont?
                <br />
                <br />
                <Link to='/logare'><Button type='login' className='btn btn-success btn-md mybtn'>Loghează-te!</Button></Link>
            </span>
        </div>
    )
}