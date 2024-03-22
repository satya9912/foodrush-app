import React from 'react';
import { MENU_IMAGE_CDN_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, decreaseQuantity } from '../utils/cartSlice';

function FoodItems(props) {
    const { name, price, imageId, defaultPrice, id, qty } = props.item;
    // console.log(imageId);
    // console.log(qty);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    }

    return (
        imageId ? (
            <div className='flex w-[600px] items-center border-2 bg-[#ffffff] mb-3'>
                <div className=''>
                    <img className='w-[300px] p-3 rounded-[30px]' src={MENU_IMAGE_CDN_URL + imageId} />
                </div>
                <div className='ml-4 w-[100%]'>
                    <div className='flex justify-between'>
                        <h3 className='font-semibold text-xl mb-9'>{name}</h3>
                        <img className='w-5 h-5 mr-1' onClick={() => handleDelete(id)} src='https://cdn-icons-png.flaticon.com/128/1828/1828666.png' />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold text-2xl'>₹{price ? qty * price / 100 : qty * defaultPrice / 100}.00</h3>
                        <div className='flex bg-gray-200 p-2 rounded-xl items-center mr-5'>
                            <img className='w-4 h-4 mr-3' onClick={() => dispatch(decreaseQuantity(id))} src='https://cdn-icons-png.flaticon.com/128/2801/2801932.png' />
                            <p className='mr-3 text-xl font-semibold text-center bg-white px-2 py-1 rounded-[50%]'>{qty}</p>
                            <img className='w-4 h-4' onClick={() => dispatch(addItem(props.item))} src='https://cdn-icons-png.flaticon.com/128/9312/9312231.png' />
                        </div>
                    </div>
                </div>
            </div>
        ) : 
        <div className=' w-[600px] items-center justify-center border-2 bg-[#ffffff] mb-3'>
        <div className='ml-4 w-[100%] flex justify-around'>
                <div>
                <h3 className='font-semibold text-lg mb-9 w-[200px]'>{name}</h3>
                </div>

                <div>
                <h3 className='font-semibold text-2xl'>₹{price ? qty * price / 100 : qty * defaultPrice / 100}.00</h3>
                </div>

                <div>
                <div className='flex bg-gray-200 p-2 rounded-xl items-center mr-5'>
                    <img className='w-4 h-4 mr-3' onClick={() => dispatch(decreaseQuantity(id))} src='https://cdn-icons-png.flaticon.com/128/2801/2801932.png' />
                    <p className='mr-3 text-xl font-semibold text-center bg-white px-2 py-1 rounded-[50%]'>{qty}</p>
                    <img className='w-4 h-4' onClick={() => dispatch(addItem(props.item))} src='https://cdn-icons-png.flaticon.com/128/9312/9312231.png' />
                </div>
                </div>

                <div>
                <img className='w-5 h-5 mr-1' onClick={() => handleDelete(id)} src='https://cdn-icons-png.flaticon.com/128/1828/1828666.png' />
                </div>
            </div>
    </div>
    );
}

export default FoodItems;
