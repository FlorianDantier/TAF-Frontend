import { RootState } from '../store'
import { User } from '../../models/User'
import { Loadable } from '../../utils/Loadable'

export const userSelector = ({ presence }: RootState): Loadable<User> => presence.user
