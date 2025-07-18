import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './reducers'

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware() .concat(some middleware) */
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
