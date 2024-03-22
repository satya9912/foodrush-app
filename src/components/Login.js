import React from 'react'

function Login() {
  return (
    <div className='flex justify-center'>
        <div className='mt-52 flex p-4'>
        <form>
        <h3 className='font-semibold text-2xl text-center mb-4'>Login</h3>
            <div className="mb-3 w-80">
                <input type="email" required className="form-control bg-[#fafafa]" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 w-80">
                <input type="password" required className="form-control bg-[#fafafa]" id="exampleInputPassword1" placeholder='Enter your password'/>
            </div>
            <button type="submit" className="bg-[#fb641b] text-white text-base font-semibold p-2  w-80 my-2">Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login