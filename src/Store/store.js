import { configureStore } from '@reduxjs/toolkit'
import OutLookSlice from '../Fatures/OutLookSlice'

export const store= configureStore({
    reducer:{
        email:OutLookSlice
    }
})

