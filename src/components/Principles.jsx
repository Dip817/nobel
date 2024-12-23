import React from 'react'
import '../assets/css/principles.css'
function Principles() {
    return (
        <>
        <div style={{backgroundColor:'#d9d9d9',padding:'5rem 0rem',marginTop:'5%'}}>
            <div className='principles-main container' >
                <div className='d-flex flex-column align-items-center' style={{ fontfamily: 'Inter' }}>
                    <h2 style={{color:'#29549A'}}>Core Principles of Nobel's Academy</h2>
                    <p>Principles are more than anything at Nobel's Academy</p>
                </div>
                <div className='principle-cards'>
                    <div className='pcard flex-column'>                        
                       <div> <h4>CHILD LED-LEARNING</h4>
                        <p>Children are encouraged to follow their interests and learn at their own pace.</p></div>
                    </div>
                    <div className='pcard flex-column'>                       
                       <div> <h4>CHILD LED-LEARNING</h4>
                        <p>Children are encouraged to follow their interests and learn at their own pace.</p></div>
                    </div>
                    <div className='pcard flex-column'>                       
                       <div>  <h4>CHILD LED-LEARNING</h4>
                        <p>Children are encouraged to follow their interests and learn at their own pace.</p></div>
                    </div>
                    <div className='pcard flex-column'>                       
                       <div>  <h4>CHILD LED-LEARNING</h4>
                        <p>Children are encouraged to follow their interests and learn at their own pace.</p></div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Principles