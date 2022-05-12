import React from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import '../css/Home.css'
import { Bottombar } from './Bottombar'

export const Home = () => {
    return(
        <div className='wrapper'>
            <Navbar/>
            <Bottombar/>
        </div>
    )
}