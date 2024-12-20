import React from 'react'
import '../assets/css/banner.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/imgs/logo-nobel.png'
function Banner() {
    return (
        <>
            <div className='banner-main d-flex flex-column border h-100'>
                <div className='logo'>
                    <img src={Logo} alt='' />
                </div>
                <div className='d-flex flex-column  w-100' style={{ alignItems: 'center', marginTop: '10%' }}>
                    <h2>Your Child's Future Begins Here</h2>
                    <p style={{fontWeight:'200'}}>Discover the best kid's school</p>
                </div>
                <div className='banner-buttons d-flex'>
                    <button className='fill-btn'>Admissions</button>
                    <Link className='hollow-btn' to=''>Learn More</Link>
                </div>
                <div className='twisted-line'>
                    <p>Secure your child's future</p>
                </div>
            </div>

        </>
    )
}

export default Banner