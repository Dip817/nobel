import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/contactform.css'
function Contactform() {
  return (
    <>
    <div className='contactform-main d-flex flex-wrap my-5'>
        <div className='contactform-left'>
        <div class='contact-info d-flex'>
            <h1>Contact us</h1>
            <p style={{fontSize:'20px',fontWeight:'400px'}}>Register for daily updates</p>
            <div class="details mt-5">
                <p><b>&#x2709; </b> hello@relume.io</p>
                <p><i class='bx bxs-phone'></i> +1 (555) 000-0000</p>
                <p><i class='bx bx-current-location'></i> 123 Sample St, Sydney NSW 2000 AU</p>
            </div>
        </div>
        </div>
        <div div className='contactform-right'>
        <form class="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required></input>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required></input>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Type your message..." rows="5" cols="4" required></textarea>
            </div>
            <div class="form-group terms">
                <input type="checkbox" id="terms" name="terms" required></input>
                <label for="terms">I accept the <Link to=''>Terms</Link></label>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
               
    </div>
    </>
  )
}

export default Contactform