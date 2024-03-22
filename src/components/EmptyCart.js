import React from 'react';
import emptyCartImg from "../utils/images/emptyCart.png";
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='mt-32 mb-4'>
        <div className='flex flex-col justify-center items-center'>
            <img className='border-2 w-80' src={emptyCartImg} />
            <Link to="/">
            <button className='bg-[#E45555] p-2 text-white font-semibold text-lg rounded-e-md rounded-s-md mt-3'>Shop Now</button>
            </Link>
        </div>
    </div>
  )
}

export default EmptyCart;