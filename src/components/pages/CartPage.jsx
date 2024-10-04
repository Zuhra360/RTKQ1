
import { notifications } from '@mantine/notifications';
import { useGetCartsQuery  } from '../../Redux/Slice/cartApiSlice';
import { Loader } from '@mantine/core';

export const CartPage = () => {
    const { data, error, isLoading } = useGetCartsQuery();
    if (error) {
      notifications.show({
        autoClose: 3000,
        color: 'red',
        title: 'Error while Fetching data',
        message: error.error || 'An unknown error occurred'
    });
    }
  return (
    <>
      <div className='w-full h-screen bg-gray-100'>
        <h1>Fetching cart data</h1>
        {isLoading && (
            <div>
                <Loader color='blue' type='dots'/>
            </div> 
        )}

        {data && (
            <div className='flex flex-col'>
                {data.map((item) => (
                    <div key={item.id}>
                        <p>{item.userId}</p>
                        <p>{item.date}</p>
                       
                    </div>
                ))}

            
            
            
            
        </div>)}

      </div>

    </>
  )
}
