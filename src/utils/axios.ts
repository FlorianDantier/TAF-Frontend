import a from 'axios'

export const axios = a.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})
