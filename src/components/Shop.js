import React from 'react'
import { Products } from './Products'
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

export const Shop = () => {
    return(
        <div className='shop'>
            <div className='button-home'>
            <Link to='/' className='home'><Button type='home'>Acasă</Button></Link>
            </div>
            <Products/>
        </div>
    )
}