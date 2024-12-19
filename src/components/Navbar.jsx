import React from 'react'
import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
    return (
        <>
            <div className='navbar'>
                <Link to=''>About</Link>
                <Link to=''>Campus</Link>
                <Link to=''>Contact</Link>
            </div>
        </>
    )
}

export default navbar