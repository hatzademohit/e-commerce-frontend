import { Container, ListItem, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Container maxWidth='xl' sx={{backgroundColor: '#000000'}}>
      <Typography component='ul'>
        <ListItem>About us</ListItem>
        <ListItem>Contact us</ListItem>
      </Typography>
    </Container>
  )
}

export default Footer
