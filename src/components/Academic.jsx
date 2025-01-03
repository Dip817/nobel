import React from 'react'
 import '../assets/css/academic.css'
import academyImgOne from '../assets/imgs/image 42.png'
import academyImgTwo from '../assets/imgs/image 46.png'
import academyImgThree from '../assets/imgs/image 43.png'

function Academic() {
  return (
    <>
        <div className="academic-center-container container">
            <div className="left-text-div d-flex flex-column w-25">
                <img className='position-img' src={academyImgTwo} alt="" />
                <div className='floating-p-first'>
                    <h3>Primary years programme</h3>
                    <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals.  </p>
                    </div>
                <h3>Primary years programme</h3>
                <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals.  </p>
            </div>
                <img src={academyImgThree} alt="" />
            <div className="right-text-div d-flex flex-column w-25">
            <div className='floating-p-second'>
                    <h3>Primary years programme</h3>
                    <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals. </p>
                    </div>
                <h3>Primary years programme</h3>
                <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals.  </p>
                <img className='position-img' src={academyImgOne} alt="" />
            </div>
        </div>
    </>
  )
}

export default Academic