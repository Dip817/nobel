import React from 'react'
import '../assets/css/contactform.css'
function contactform() {
  return (
    <>
    <div className='contactform-main d-flex mt-5'>
        <div className='contactform-left'>
        <div class='contact-info'>
            <h1>Contact us</h1>
            <p>register for daily updates</p>
            <div class="details">
                <p><b>&#x2709; </b> hello@relume.io</p>
                <p><i class='bx bxs-phone'></i> +1 (555) 000-0000</p>
                <p><i class='bx bx-current-location'></i> 123 Sample St, Sydney NSW 2000 AU</p>
            </div>
        </div>
        </div>
        <div div className='contactform-right'>
        <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required></input>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required></input>

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Type your message..." required></textarea>

                <div class="checkbox-container">
                    <input type="checkbox" id="terms" name="terms" required></input>
                    <label for="terms">I accept the <a href="/">Terms</a></label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
               
    </div>
    </>
  )
}

export default contactform