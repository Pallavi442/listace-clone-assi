import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className='py-5 text-center text-uppercase'>
        <h1>do you want to add your business listing with us?</h1>
        <p className='pb-4 text-center mt-5'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
    </div>
    <div className='d-flex mx-auto w-50 contact-container mb-5'>
      <input type='email' className='form-control'/>
      <button className='border-0 px-4 py-3 text-bg-danger text-nowrap'>Create Account</button>
    </div>
    </>
  )
}

export default Contact