export interface Loadable<T> {
  data?: T
  isLoading: boolean
  error?: any
}
