import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../../models/User'
import { axios } from '../../utils/axios'

export enum PresenceActions {
  UPDATE_USER = 'presence/user/update',
}

export const userUpdateAction = createAction<User>(PresenceActions.UPDATE_USER)
export const userUpdateActionBis = createAction<User>(PresenceActions.UPDATE_USER)

// Le retour de cette fonction sera le contenu de action.payload dans le reducer
export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (user: User, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('url ...') // TODO - Bonne URL
      return data //
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)
