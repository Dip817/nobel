import React from 'react'
import '../assets/css/admissionform.css'
function AdmissionForm() {
  return (
    <>
    <div className='admissionform-main'>
    <div class="form-container">
        <h1>Admission At Vancouver International School</h1>
        <form>
        {/* first div */}
        <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="branch">Please Select Branch</label>
                <select id="branch" name="branch">
                    <option>ABC</option>
                    <option>XYZ</option>
                </select>
            </div>
            <div class="form-group">
                <label for="reg-number">Registration Number*</label>
                <input type="text" id="reg-number" name="reg-number"></input>
            </div>

            <div class="form-group">
                <label for="photo">Photo of the Student</label>
                <input type="file" id="photo" name="photo"></input>
            </div>
            </div>
            {/* first div ends here */}

            {/* second div starts from here */}
            <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name"></input>
            </div>

            <div class="form-group">
                <label for="middle-name">Middle Name</label>
                <input type="text" id="middle-name" name="middle-name"></input>
            </div>

            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"></input>
            </div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" name="gender">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>

            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob"></input>
            </div>

            <div class="form-group">
                <label for="class">Admission To Class</label>
                <select id="class" name="class">
                    <option>4th</option>
                </select>
            </div>
            </div>
            {/* second div ends here */}

            {/* third div starts from here */}
            <h2>Parent/Guardian</h2>
            <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="relation">Choose Relation</label>
                <select id="relation" name="relation">
                    <option>Father</option>
                    <option>Mother</option>
                </select>
            </div>

            <div class="form-group">
                <label for="father-first-name">First Name</label>
                <input type="text" id="father-first-name" name="father-first-name"></input>
            </div>

            <div class="form-group">
                <label for="father-last-name">Last Name</label>
                <input type="text" id="father-last-name" name="father-last-name"></input>
            </div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="father-email">Email Address</label>
                <input type="email" id="father-email" name="father-email" placeholder="Example@gmail.com"></input>
            </div>

            <div class="form-group">
                <label for="father-phone">Phone Number</label>
                <input type="tel" id="father-phone" name="father-phone"></input>
            </div>

            <div class="form-group">
                <label for="father-qualification">Education Qualification</label>
                <input id="father-qualification" name="father-qualification">               
                </input>
            </div>
            </div>
            
            <div class="form-group">
                <label for="father-address">Residential Address of the Parent/Guardian</label>
                <textarea id="father-address" name="father-address" placeholder="Please type your address here..."></textarea>
            </div>
            {/* third div ends here */}

            {/* fourth div starts from here */}
            <h2>Parent/Guardian</h2>
            <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="mother-relation">Choose Relation</label>
                <select id="mother-relation" name="mother-relation">
                    <option>Mother</option>
                    <option>Father</option>
                </select>
            </div>

            <div class="form-group">
                <label for="mother-first-name">First Name</label>
                <input type="text" id="mother-first-name" name="mother-first-name"></input>
            </div>

            <div class="form-group">
                <label for="mother-last-name">Last Name</label>
                <input type="text" id="mother-last-name" name="mother-last-name"></input>
            </div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
            <div class="form-group">
                <label for="mother-email">Email Address</label>
                <input type="email" id="mother-email" name="mother-email" placeholder="Example@gmail.com"></input>
            </div>

            <div class="form-group">
                <label for="mother-phone">Phone Number</label>
                <input type="tel" id="mother-phone" name="mother-phone"></input>
            </div>

            <div class="form-group">
                <label for="mother-qualification">Education Qualification</label>
                <input id="mother-qualification" name="mother-qualification">
                
                </input>
            </div>
            </div>
            <div class="form-group">
                <label for="mother-address">Residential Address of the Parent/Guardian</label>
                <textarea id="mother-address" name="mother-address" placeholder="Please type your address here..."></textarea>
            </div>
            {/* fourth div ends here */}

            <button type="submit" class="btn">Apply Now 
            </button>
        </form>
    </div>
    </div>
    </>
  )
}
export default AdmissionForm