import React from 'react'
import '../../assets/css/about/AboutPage.css'
import BannerImage from '../../assets/imgs/principal.jpg'
import ScrollAni from './ScrollAni'
import SchoolCareer from './SchoolCareer'
import Faculty from './Faculty'
function About() {
  return (
    <>
        <div className="about-banner"></div>
            {/* principles message */}
            <div className="principles-message-container container d-flex justify-content-around align-items-center" style={{marginTop:'6rem', marginBottom:'6rem'}}>
                <div className="principles-message-container-text-box d-flex flex-column align-items-start">
                    <h1>The Principal</h1>
                    <div className="inner-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae repellendus nihil voluptatum impedit voluptatem ipsum itaque perspiciatis velit sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae repellendus nihil voluptatum impedit voluptatem ipsum itaque perspiciatis velit sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae repellendus nihil voluptatum impedit voluptatem ipsum itaque perspiciatis velit sint?</p>
                    </div>
                </div>
                <div className="principles-message-container-image-box">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
            <ScrollAni/>
            <SchoolCareer/>
            <Faculty/>
    </>
  )
}

export default About