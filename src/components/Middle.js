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

export const Middle = () => {
    return(
        <div className='middlebar'>
            <div className='middle'>
                <Link to='recomandarilenoastre' className='midlinks'><Button type='recomandarilenoastre'>Recomandările noastre</Button></Link>
            </div>
        </div>
    )
}