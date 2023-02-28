import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import App from '../App'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'

// Toutes les routes doivent être déclaré avant celle dirigeant vers <NotFoundPage />
const routes: RouteObject[] = [
  {
    path: '',
    element: <HomePage />,
    index: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    index: true,
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes,
  },
])
