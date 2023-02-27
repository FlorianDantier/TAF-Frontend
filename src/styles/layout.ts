import { CSSProperties } from 'react'

export const layout: { [key: string]: CSSProperties } = {
  main: {
    margin: 0,
    display: 'flex',
    minHeight: '100vh',
  },
  child: {
    display: 'flex',
    flexGrow: 1,
  },
}
