import React, { useEffect, useState } from 'react';
import { IMAGE_CDN_URL } from '../constants';
import useRestaurant from '../hooks/useRestaurant';
import { MENU_IMAGE_CDN_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import MenuSkeleton from '../skeletons/MenuSkeleton';
import { toast, ToastContainer } from 'react-toastify';

function RestaurantMenu() {

  const dispatch = useDispatch();

  const notify = () => {
    toast.success("item added to cart...!", {
      position: "bottom-right"
    });
  }

  const handleAdd = (item) => {
    dispatch(addItem(item));
    notify();
  }

  const {restaurantMenu, menuItems} = useRestaurant();
  // console.log(menuItems);
  console.log(restaurantMenu);
  const {name, cloudinaryImageId, city, costForTwoMessage, avgRating, totalRatingsString} = restaurantMenu;

  
  return (
    menuItems.length === 0 ? ( <MenuSkeleton />) : (
      
    <div className=''>
      <div className='bg-[#131921]  p-5 rounded-md  mt-20 mb-3 border-2 flex justify-center align-top'>
        <div className='mr-3'>
          <img className=' rounded-md object-contain w-60 mr-5' src={IMAGE_CDN_URL + cloudinaryImageId} />
        </div>
        <div>
            <h1 className='font-bold text-xl text-white mb-3'>{name}</h1>
            <h1 className='font-semibold text-lg mb-1 text-white'>city: {city}</h1>
            <h1 className='font-semibold text-base mb-1 text-white'>{costForTwoMessage}</h1>
            <div className="flex">
            <span className='mr-1 text-lg mb-1 text-white'>{avgRating}</span>
            <img className="h-6" src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
            <span className='text-white'>({totalRatingsString})</span>
            </div>
            <p className='text-base text-white'>Order above 149 for discounted delivery fee</p>
        </div>
      </div>

      <div>
        {menuItems.map( (item, index)=> (
          <>
          <div className='flex w-[900px] justify-between align-middle mx-80 mb-5 border-2 p-4'>
            <div className='w-2/3'>
              <p key={index} className='font-semibold text-lg mt-2'>{item.name}</p>
              <p className='mt-1 font-semibold text-base'>₹ {item.price ? item.price/100 : 
                item.defaultPrice/100}</p>
              <p className='text-gray-400 mt-1'>{item.description}</p>  
              <div className='flex'>
              <span className='mr-[1px] mt-1 font-bold text-base'>{item.ratings.aggregatedRating.rating ? item.ratings.aggregatedRating.rating: 3.9}</span>
              <img className="h-5 mt-[6px]" src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
              </div>

            </div>
            {item.imageId ? <div className='mb-2'>
              <img className='my-3 object-cover w-20' src={MENU_IMAGE_CDN_URL + item.imageId}/>
              <button type="button" onClick={() => handleAdd(item)} className='bg-[#d97919] px-5 py-2 text-sm rounded-md'>Add +</button>
            </div> :  <button type="button" onClick={() => handleAdd(item)} className='bg-[#d97919] rounded-md h-10 px-5 py-2  mt-2'>Add +</button>}
          </div>
          </>
        )
        )}
      </div>
    </div>
    )

  )
}

export default RestaurantMenu;