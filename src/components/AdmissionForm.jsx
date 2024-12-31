import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../assets/css/admissionform.css';

function AdmissionForm() {
    const [formData, setFormData] = useState({
        branch: '',
        regNumber: '',
        photo: null,
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dob: '',
        admissionClass: '',
        parentRelation: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentPhone: '',
        parentOccupation: '',
        parentAddress: '',
        // ... Add other fields here
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value, // Handle file input separately
        });
    };


    const handleApplyNow = async () => {
        // Navigate to Trial component with props (firstName) passed as state
        navigate('/download-admission-form', { state: { formData } });
    };



    return (
        <>
            <div className='admissionform-main'>
                <div className="form-container container">
                    <h1>2025 Admission At Nobels Academy</h1>
                    <form>
                    <div className='row-diff-container'>
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor="branch">Please Select Branch</label>
                                <select
                                    id="branch"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                >
                                    <option value="ABC">ABC</option>
                                    <option value="XYZ">XYZ</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="regNumber">Registration Number*</label>
                                <input
                                    type="text"
                                    id="regNumber"
                                    name="regNumber"
                                    value={formData.regNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group photo-div">
                                <label htmlFor="photo">Photo of the Student</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="middleName">Middle Name</label>
                                <input
                                    type="text"
                                    id="middleName"
                                    name="middleName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor="branch">Gender</label>
                                <select
                                    id="branch"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                >
                                    <option value="ABC">Male</option>
                                    <option value="XYZ">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">DOB</label>
                                <input type='date' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="admission-class">Admission to class</label>
                                <select
                                    id="admission-class"
                                    name="admission-class"
                                    value={formData.branch}
                                    onChange={handleChange}
                                >
                                    <option value="ABC">1st</option>
                                    <option value="XYZ">2nd</option>
                                    <option value="XYZ">3rd</option>
                                    <option value="XYZ">4th</option>
                                    <option value="XYZ">5th</option>
                                    <option value="XYZ">6th</option>
                                    <option value="XYZ">7th</option>
                                    <option value="XYZ">8th</option>
                                </select>
                            </div>                       
                        
                        </div>
                        </div>
                        {/* Repeat for other fields */}
                        {/* parents section */}
                        <div className='row-diff-container'>
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor=" parentRelation">Guardian/Parent</label>
                                <select
                                    id="branch"
                                    name=" parentRelation"
                                    value={formData.parentRelation}
                                    onChange={handleChange}
                                >
                                    <option value="ABC">Father</option>
                                    <option value="XYZ">Mother</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor=" parentFirstName">First Name</label>
                                <input
                                    type="text"
                                    id=" parentFirstName"
                                    name=" parentFirstName"
                                    value={formData.parentFirstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="parentLastName">Last Name</label>
                                <input
                                    type="text"
                                    id="parentLastName"
                                    name="parentLastName"
                                    value={formData.parentLastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor="parentEmail">Email</label>
                                <input
                                    type="email"
                                    id="parentEmail"
                                    name="parentEmail"
                                    value={formData.parentEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="parentPhone">Phone Number*</label>
                                <input
                                    type="num"
                                    id="parentPhone"
                                    name="parentPhone"
                                    value={formData.parentPhone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor=" parentOccupation">Occupation</label>
                                <input
                                    type="text"
                                    id=" parentOccupation"
                                    name=" parentOccupation"
                                    value={formData.parentOccupation}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row-diff'>
                            <div className='form-group'>
                                <label htmlFor="parentAddress">Address</label>
                                <input
                                    type="text"
                                    placeholder="Please type your address here..."
                                    id=" parentAddress"
                                    name="parentAddress"
                                    value={formData.parentAddress}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        </div>
                        {/* parent 2 */}
                        <div className='row-diff-container'>
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor=" parentRelation">Guardian/Parent</label>
                                <select
                                    id="branch"
                                    name=" parentRelation"
                                    value={formData.parentRelation}
                                    onChange={handleChange}
                                >
                                    <option value="ABC">Father</option>
                                    <option value="XYZ">Mother</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor=" parentFirstName">First Name</label>
                                <input
                                    type="text"
                                    id=" parentFirstName"
                                    name=" parentFirstName"
                                    value={formData.parentFirstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="parentLastName">Last Name</label>
                                <input
                                    type="text"
                                    id="parentLastName"
                                    name="parentLastName"
                                    value={formData.parentLastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row-diff'>
                            <div className="form-group">
                                <label htmlFor="parentEmail">Email</label>
                                <input
                                    type="email"
                                    id="parentEmail"
                                    name="parentEmail"
                                    value={formData.parentEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="parentPhone">Phone Number*</label>
                                <input
                                    type="num"
                                    id="parentPhone"
                                    name="parentPhone"
                                    value={formData.parentPhone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor=" parentOccupation">Occupation</label>
                                <input
                                    type="text"
                                    id=" parentOccupation"
                                    name=" parentOccupation"
                                    value={formData.parentOccupation}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row-diff'>
                            <div className='form-group'>
                                <label htmlFor="parentAddress">Address</label>
                                <input
                                    type="text"
                                    placeholder="Please type your address here..."
                                    id=" parentAddress"
                                    name="parentAddress"
                                    value={formData.parentAddress}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        </div>
                        <button type="button" className="fill-btn-two" onClick={handleApplyNow}>
                            Apply Now
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
}

AdmissionForm.propTypes = {};

export default AdmissionForm;
