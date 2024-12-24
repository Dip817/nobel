import React from 'react'
import '../assets/css/footer.css'
import Logo from '../assets/imgs/logo-nobel.png'
function Footer() {
    return (
        <>
            <div className='footer-main d-flex'>
                <div className='footer-main-one footer-inner d-flex justify-content-center align-items-center'>
                    <div className='img-logo'>
                        <img src={Logo} alt='' />
                    </div>
                    <div className='paragraph'>
                        <p>Nobel Academy is your first <br /> choice for securing your <br /> child's future.</p>
                        <p>Address: Dhaknikata, <br /> Champasari <br />
                            Phone: 0353 XXX XXX</p>
                    </div>
                </div>
                <div className='footer-main-two footer-inner d-flex flex-column justify-content-center align-items-center'>
                    <h5>Courses</h5>
                    <p>Primary Years Programme</p>
                    <p>Middle Years Programme</p>
                    <p>Diploma Programme</p>                   
                </div>
                <div className='footer-main-three footer-inner d-flex flex-column justify-content-center align-items-center'>
                    <h5>Resources</h5>
                    <p>Smart classes</p>
                    <p>Library</p>
                    <p>Sports</p>
                    <p>Auditoriums and Halls</p>
                </div>
                <div className='footer-main-four footer-inner d-flex flex-column justify-content-center align-items-center'>
                <h5>About us</h5>
                    <p>Contact</p>
                    <p>Help/Support</p>
                    <p>FAQ</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </>
    )
}
export default Footer