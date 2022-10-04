import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { cocktailAPI } from '../service/cocktailAPI'

const store = configureStore({
  reducer: {
    [cocktailAPI.reducerPath]: cocktailAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cocktailAPI.middleware) 
})

setupListeners(store.dispatch)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch