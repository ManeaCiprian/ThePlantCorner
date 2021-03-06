import React from 'react'
import { Navbar } from './Navbar'
import '../css/Home.css'
import { Bottombar } from './Bottombar'
import { Middle } from './Middle'

export const Home = () => {
    return(
        <div className='wrapper'>
            <Navbar/>
            <Middle/>
            <Bottombar/>
        </div>
    )
}