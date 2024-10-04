import { notifications } from '@mantine/notifications';
import { useGetUsersQuery , useDeleteUserMutation } from '../../Redux/Slice/cartApiSlice';
import { Loader } from '@mantine/core';

export const UserPage = () => {
    const { data,error , isLoading} = useGetUsersQuery();
    const [deleteUser ] = useDeleteUserMutation();
    
    if (error){
        notifications.show({
            autoClose: 3000,
            color: 'red',
            title: 'Error while Fetching data',
            message: error.error || 'An unknown error occurred'
            
        });
        console.log(error);
    }
  return (
    <div className='w-full h-screen bg-gray-100'>
        <h1 className='text-3xl font-bold p-4'>User Details</h1>
        {isLoading && (
            <div>
                <Loader color='blue' type='dots'/>
            </div> 
        )}
        {data && (
            <div className='flex flex-wrap gap-4 justify-center items-center'>
                {data.map((item) => (
                    <div key={item.id} className='w-56 h-56 bg-white'>
                        <p className='text-2xl font bold'>User {item.id}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <p>{item.password}</p>
                        <p>{item.phone}</p>
                        <button className='bg-red-700 text-white px-2 rounded' onClick={()=> deleteUser(item.id)} >Delete</button>
                        

                    </div>
                ))}
                
                
            </div>
        )}

    </div>
  )
}
