import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICocktail } from '../types/models'


export const cocktailAPI = createApi({
    reducerPath: 'cocktails',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1'}),
    endpoints: (builder) => ({
        getCocktailByName: builder.query<ICocktail[], string>({
            query: (name) => `/search.php?s=${name}`
        }),
        getRandomCocktail: builder.query<ICocktail, string>({
            query: () => `/random.php`
        }),        
    })
})



