import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),

    endpoints: (builder) => ({
        getCarts: builder.query({
            query: () => '/carts'
        }),

        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users'],
        }),

        

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags : ['users'],
        }),

        // addUser : builder.mutation({
        //     query: (email) => ({
        //         url : '/users',
        //         method: 'POST' ,
        //         body : {email}
        //     })
        // })
    })
});

export const { useGetCartsQuery , useGetUsersQuery ,useDeleteUserMutation  } = cartApi;

