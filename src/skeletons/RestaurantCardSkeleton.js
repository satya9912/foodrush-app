import React from 'react'

function RestaurantCardSkeleton() {
  return (
    <div>
        <div className="mt-32 grid grid-cols-4 mx-10">
            {Array(10).fill(0).map((e, index) => (
            <div className="w-80 h-80 flex-shrink-0 m-4"> 
               <div className='image w-72 h-[200px] rounded-3xl p-2 bg-[#ddd]'></div>
               <div className='title w-2/3 h-4 bg-[#ddd] mt-3'> </div>
               <div className='title w-3/3 h-4 bg-[#ddd] mt-3'> </div>
               <div className='title w-3/3 h-4 bg-[#ddd] mt-3'> </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default RestaurantCardSkeleton;