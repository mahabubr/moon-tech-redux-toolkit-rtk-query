import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => "/products",
            providesTags: ["Products"]
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/product',
                method: "POST",
                body: data
            })
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"]
        })
    })
})

export const { useGetProductQuery, useAddProductMutation, useRemoveProductMutation } = productAPI;