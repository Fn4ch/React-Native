import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { ICocktail } from '../../types/models'

interface cocktailState{
    cocktails: ICocktail[]
}

const initialState: cocktailState = {
    cocktails: []
}

export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
    }
})