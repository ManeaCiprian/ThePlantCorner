import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #A3D383;
    padding: 5px 20px;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
`
export const Contact = () => {
    return (
        <div className='contact'>
            <h1>
                Magazinul nostru se află în urmatoarea locație:

                Strada Gheorghe Lazăr, numărul 28A.

                Număr de telefon: 0752638890

                Programul magazinului:
                Luni-Vineri: 10:00-20:00
                Sâmbătă: 12:00-18:00
                Duminică: Închis
            </h1>
            <Link to='/' className='home'><Button type='home'>Acasă</Button></Link>
        </div>
    )
}