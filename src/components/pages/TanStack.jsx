import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { Loader } from '@mantine/core';

export const TanStack = () => {

     const { isPending, error, data } = useQuery({
        queryKey: ['productData'],
        queryFn: () => axios('https://fakestoreapi.com/products').then((res) => res.data)
            
    });
    
    if (error) {
        notifications.show({
        autoClose: 3000,
        color: 'red',
        title: 'Error Fetching data',
        message: error.message
    });
    }
  return (
    <>
      <div className='w-full h-screen bg-gray-100 flex items-center justify-center '>
        <h1 className='text-3xl font-bold'>Fetching data with tanStack</h1>
        {isPending && (
                    <div justify={'center'}>
                        <Loader color='blue' type='dots' />{' '}
                    </div>
                )}
        {data &&
         (<div> { data.map((item) => (
            <div key={item.id} className=' bg-white'>
                <img src={item.image} fit='contain' height={160} alt='Norway' />
                <p>{item.category}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>

            </div>
         ))}
             
        </div>)}


      </div>
    </>
  )
}
