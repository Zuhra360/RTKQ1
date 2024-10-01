import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementfive, increment, incrementfive, reset } from '../../Redux/Slice/CounterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>

        <div className='w-3/5 h-2/3 bg-white flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold p-2'>Counter</h1>
        <p className='text-2xl font-bold p-2'>{count}</p>

        <div className='flex flex-row gap-2'>
            <button className='text-white bg-red-600 px-2 rounded' onClick={() => dispatch(increment())}>Increment</button>
            <button className='text-white bg-red-600 px-2 rounded' onClick={() => dispatch(incrementfive())}>Increment by 5</button>
            <button className='text-white bg-green-600 px-2 rounded' onClick={() => dispatch(decrement())}>Decrement</button>
            <button className='text-white bg-green-600 px-2 rounded' onClick={() => dispatch(decrementfive())}>Decrement by 5</button>
            <button className='text-white bg-gray-600 px-2 rounded' onClick={() => dispatch(reset())}>Reset</button>
        </div>
        

        </div>
    </div>
  )
}
