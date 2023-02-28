import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { PresenceState } from '../states/presence.state'
import { fetchUser, userUpdateAction, userUpdateActionBis } from '../actions/presence.action'
import { User } from '../../models/User'

export const initialState: PresenceState = {
  user: {
    data: undefined,
    isLoading: false,
    error: undefined,
  },
}

/* eslint-disable no-param-reassign */
export const presence = createReducer(initialState, (builder) => {
  builder
    .addCase(userUpdateAction, (state: PresenceState, action: PayloadAction<User>) => ({
      ...state,
      user: {
        ...state.user,
        data: action.payload,
      },
    }))
    .addCase(userUpdateActionBis, (state: PresenceState, action: PayloadAction<User>) => {
      state.user.data = action.payload
    })
    .addCase(fetchUser.pending, (state: PresenceState) => (
      {
        ...state,
        user: {
          ...state.user,
          isLoading: true,
        },
      }
    ))
    .addCase(fetchUser.fulfilled, (state: PresenceState, action: PayloadAction<User>) => (
      {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
          isLoading: false,
        },
      }
    ))
    .addCase(fetchUser.rejected, (state: PresenceState, action: PayloadAction<any>) => (
      {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          data: undefined,
          error: action.payload,
        },
      }
    ))
})
