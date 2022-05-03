import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #A3D383;
    padding: 5px 20px;
    border-radius: 7px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`

export const Navbar = () => {
    return(
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt=""/>
            </div>
            <div className='rightside'>
                <Link to='acasa' className='navlinks'><Button type='acasa'>Acasă</Button></Link>
                <Link to='favorite' className='navlinks'><Button type='favorite'>Favorite</Button></Link>
                <Link to='magazin' className='navlinks'><Button type='magazin'>Magazin</Button></Link>
                <Link to='comenzilemele'className='navlinks'><Button type='comenzile mele'>Comenzile mele</Button></Link>
                <Link to='autentificare'className='navlinks'><Button type='autentificare'>Autentificare</Button></Link>
                <Link to='logare' className='navlinks'><Button type='logare'>Logare</Button></Link>
            </div>
        </div>
    )
}

