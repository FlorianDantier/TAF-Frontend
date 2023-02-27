import React from 'react'
import { Grid, Typography } from '@mui/material'
import { style } from './style'

export const NotFoundPage = () => (
  <Grid style={style}>
    <Typography variant="h2">
      La page que vous cherchez n&lsquo;existe pas
    </Typography>
  </Grid>
)
