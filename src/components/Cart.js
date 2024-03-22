import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItems from './FoodItems';
import { clearCart } from '../utils/cartSlice';
import { useState } from 'react';
import EmptyCart from './EmptyCart';

function Cart() {

    const cartItems = useSelector(store => store.cart.items);
    const totalPrice = useSelector(store => store.cart.totalPrice);
    console.log(totalPrice)
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }

    if(cartItems.length === 0 ) return  <EmptyCart />

  return (
    <>
    <div className='flex justify-between bg-[rgba(247,247,247,255)] h-auto mb-20'>
        <div className='mt-32'>
            {cartItems.map( (item) => (
                <>
                {console.log(item)}
                <FoodItems item={item} key={item.id}/>
                </>
            ))}
        </div>

        <div className='mt-32 p-2 border-2 fixed top-0 right-40'>
            <div className='border-b-2'>
            {cartItems.map( (item) => (
                <div className='w-96 h-auto flex justify-between'>
                    <p className='text-[#777777] mb-2'>{item.name}</p>
                    <p className='text-[#777777]'>₹{item.price ? item.qty * item.price/100 : item.qty *  item.defaultPrice/100}.00</p>
                </div>    
            ))}
            </div>

            <div className='mt-2'>
                <div className='flex justify-between'>
                    <h3 className='text-[#777777] mb-2'>Total</h3>
                    <h3 className='text-[#777777] mb-2'>₹{parseInt(totalPrice)/100}.00</h3>
                </div>
                <div className='flex justify-between'>
                    <h3 className='text-[#777777] mb-2'>Delivery Charge</h3>
                    <h3 className='text-[#777777] mb-2'>₹54.00</h3>
                </div>
                <div className='flex justify-between border-b-2'>
                    <h3 className='text-[#777777] mb-2'>Discount</h3>
                    <h3 className='text-[#93cea0] mb-2'>-₹54.00</h3>
                </div>
                <div className='flex justify-between mt-2'>
                    <h3 className='text-[#777777] mb-2'>Grand Total</h3>
                    <h3 className='text-[#777777] mb-2'>₹{parseInt(totalPrice/100)}.00</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart;