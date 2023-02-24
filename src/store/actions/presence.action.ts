import { createAction } from '@reduxjs/toolkit'
import { User } from '../../models/User'

export enum PresenceActions {
  UPDATE_USER = 'presence/user/update',
}
export const userUpdateAction = createAction<User>(PresenceActions.UPDATE_USER)
export const userUpdateActionBis = createAction<User>(PresenceActions.UPDATE_USER)
