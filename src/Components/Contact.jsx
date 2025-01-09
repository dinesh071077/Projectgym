import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text ' placeholder='Full Name' required></input>
            <input type='email ' placeholder='Enter Your Email' required></input>
            <textarea placeholder='Type here .....' name='message'></textarea>
            <input type='submit' value='send'></input>

        </form>
    </div>
  )
}

export default Contact