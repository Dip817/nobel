import React from 'react'
import '../assets/css/gallery.css'
function Gallery() {
    return (
        <>
            <div className=' main-gallery container d-flex justify-content-center align-items-center flex-column'>
                <h2 className='my-5'>Gallery</h2>
                <div className='first-row'>
                    <div className='img-first-one'>
                        <img className='low-aligned' src='' alt=''/>
                    </div>
                    <div className='img-first-two'>
                        <img className='height-full' src='' alt=''/>
                    </div>
                    <div className='img-first-three'>
                        <img className='low-aligned' src='' alt=''/>
                    </div>
                </div>
                <div className='second-row'>
                    <div className='img-second-one' style={{width:'80%'}}>
                        <img className='high-aligned' src='' alt=''/>
                    </div>
                    <div className='img-second-two' style={{width:'50%'}}>
                        <img className='high-aligned' src='' alt=''/>
                    </div>
                    <div className='img-second-three' style={{width:'80%'}}>
                        <img className='height-full' src='' alt=''/>
                    </div>
                </div>
                <div className='banner-buttons d-flex'>
                    <button className='fill-btn-two'>See More</button>
                </div>
            </div>
        </>
    )
}

export default Gallery