import React from 'react'
import '../assets/css/banner.css'
import { Link } from 'react-router-dom'
function Banner() {
    return (
        <>
            <div className='banner-main d-flex flex-column border'>
               <div className='d-flex flex-column' style={{alignItems:'center'}}>
               <h2>Your Child's Future Begins Here</h2>
                <p>Discover the best kid's school</p>
                </div> 
                <div className='banner-buttons d-flex'>
                    <button>Admissions</button>
                    <Link to=''>Learn More</Link>
                </div>
            </div>

        </>
    )
}

export default Banner