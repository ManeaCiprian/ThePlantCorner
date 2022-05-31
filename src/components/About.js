import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #A3D383;
    padding: 5px 20px;
    border-radius: 7px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`
export const About = () => {
    return (
        <div className='about'>
            <h1>
                Aplicația vine în ajutorul tuturor iubitorilor de plante. Aceasta dispune de informații despre o varietate mare de plante. De la cantitatea de apă necesară și lumina potrivită, până la umiditatea și temperatura ambientală, aplicația noastră urmarește buna dezvoltare a plantelor de interior, cât și a celor de exterior.
                Aplicația dispune de o secțiune de favorite, unde fiecare utilizator poate adauga la secțiune anumite plante pentru a găsi mai ușor informațiile despre plantele respective.
                Aplicația noastră vine și cu o optiune de magazin, unde fiecare utilizator poate achiziționa plantele dorite.
            </h1>
            <Link to='/' className='home'><Button type='home'>Acasă</Button></Link>
        </div>
    )
}