import React from 'react'
import contactPic from "../utils/images/contact.png"

function Contact() {
  return (
    <div className='mt-32 flex justify-around mb-4'>
      <div>
        <img src={contactPic} />
      </div>
      <div className='mr-44'>
        <form>
          <h3 className='font-semibold text-2xl text-center mb-4'>Contact us</h3>
              <div className="mb-3">
                  <input type="text" required className="form-control bg-[#fafafa]" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Name' />
              </div>
              <div className="mb-3 w-80">
                  <input type="email" required className="form-control bg-[#fafafa]" id="exampleInputPassword1" placeholder='Enter your email'/>
              </div>
              <div className='mb-3'>
                <textarea className='form-control w-80 h-60 p-2 bg-[#fafafa]' placeholder='enter your message' />
              </div>
              <button type="submit" className="bg-[#fb641b] text-white text-base font-semibold p-2  w-80 my-2">Send</button>
          </form>
      </div>
    </div>
  )
}

export default Contact