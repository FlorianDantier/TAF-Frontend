import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { style } from './style'

interface TAFButtonProps {
  muiButtonProps: ButtonProps
}
export const TAFButton = ({ muiButtonProps } : TAFButtonProps) => (
  <Button {...muiButtonProps} style={style}>
    {muiButtonProps.children}
  </Button>
)
