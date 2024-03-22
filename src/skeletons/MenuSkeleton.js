import React from 'react'

const MenuSkeleton = () => {
  return (
    <div>
        <div className=' p-3 rounded-md w-full h-48 bg-[#ddd] mt-20 mb-3'>

        </div>
        <div>
            {Array(10).fill(0).map((e, index) => (
            <div className="flex w-[900px] justify-between align-middle mx-80 mb-5 border-2 p-4 h-[200px] bg-white"> 
               <div className='w-2/3'> 
                  <div className='w-48 h-5 rounded-md bg-[#ddd] mb-3'> </div>
                  <div className='w-48 h-5 rounded-md bg-[#ddd] mb-3'> </div>
                  <div className='w-full h-10 rounded-md bg-[#ddd] mb-3'> </div>
                  <div className='w-48 h-5 rounded-md bg-[#ddd] mb-3'> </div>
               </div>
               <div> 
                   <div className='my-3 w-20 h-20 rounded-md bg-[#ddd]'> </div>
                   <div className='w-full h-8  rounded-md bg-[#ddd]'> </div>
               </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default MenuSkeleton;