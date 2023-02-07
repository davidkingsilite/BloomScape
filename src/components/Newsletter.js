import React from 'react'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='newstext'> 
                <h4>Sign Up for Newletters</h4>
                <p> Get E-mail updates about our latest shop and <span>special offers. </span></p>
            </div>
            <div className='form'>
                <input type="text" placeholder='Your email address'/>
                <button className='normal'> Sign Up </button>    
            </div>
        </div>
    )
}

export default Newsletter;