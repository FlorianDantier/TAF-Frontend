import { Loadable } from '../../utils/Loadable'
import { User } from '../../models/User'

export interface PresenceState {
  user: Loadable<User>
}
