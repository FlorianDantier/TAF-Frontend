import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { PresenceState } from '../states/presence.state'
import { userUpdateAction, userUpdateActionBis } from '../actions/presence.action'
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
})
