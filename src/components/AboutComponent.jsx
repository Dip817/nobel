import React from 'react'
import '../assets/css/aboutcomponent.css'
import AboutC from '../assets/imgs/aboutcomp.png'
function AboutComponent() {
    return (
        <>
            <div className='about-main container'>
                <div className='about-main-left'>
                    <h2>Welcome to <br />
                        Nobel's Academy</h2>
                    <div className='mt-5'>  
                    <p>At Vancouver International School, we are committed to nurturing a global community of learners. Our school proudly offers a diverse and inclusive environment, ensuring that every student feels valued and supported. We believe that education goes beyond the classroom, and our holistic approach focuses on the academic, emotional, and social development of each student.</p>
                    <p> Our rigorous and engaging curriculum is designed to challenge and inspire students. With dedicated faculty members who are experts in their fields, we foster a love of learning and critical thinking. Beyond academics, we provide a wide range of extracurricular activities, from arts and athletics to clubs and leadership opportunities, allowing students to explore their passions and develop new skills.</p>
                    <p> We are dedicated to preparing our students to become innovative thinkers, compassionate leaders, and responsible global citizens. Graduates of Vancouver International School leave with the knowledge, skills, and values necessary to succeed in an ever-changing world. We invite you to become part of our vibrant community and embark on an educational journey that will shape your future and empower you to make a positive impact on the world.</p>
                    </div>
                    <button className='fill-btn-two mt-5'>Admissions</button>
                </div>
                <div className='about-main-right'>
                    <div>
                        <img src={AboutC} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent