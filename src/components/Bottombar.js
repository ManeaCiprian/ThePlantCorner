import React from 'react'
import { Link } from 'react-router-dom'

export const Bottombar = () => {
    return(
        <div className='bottombar'>
            <div className='left'>
                <Link to='/contact' className='bottomlinks'>Contact</Link>
                <Link to='/despre' className='bottomlinks'>Despre</Link>
            </div>
        </div>
    )
}