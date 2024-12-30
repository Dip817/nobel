import React from 'react'
import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
    return (
        <>
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/admission'>Admission</Link>
                <Link to=''>Campus</Link>
                <Link to='/contactus'>Contact</Link>
            </div>
        </>
    )
}

export default navbar