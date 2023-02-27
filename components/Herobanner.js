import React from 'react'

import {  Button,  Typography } from '@mui/material'
import { Box } from '@mui/system'

import Link from 'next/link'

import { urlFor } from '../lib/client'


const Herobanner = ({ heroBanner } ) => {


  return (
    <Box sx={{
      position: 'relative',
      borderRadius: '50%',
      }}>
      <Box sx={{
       '.img': {
          borderRadius: '0 0 1rem 1rem',
       }
        }}>
        <img src={urlFor(heroBanner.imagen)} alt='imagen banner' width={'100%'} height={600} className='img'/>
      </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            color: 'var(--headlines-color)',
            maxWidth: '30%',
            padding: '1rem',
            borderRadius: '1rem',
          }}>
              <Typography variant='h4'>{ heroBanner.titulo } </Typography>
              <Typography variant='body2' gutterBottom sx={{color: 'var(--paragraph-color)'}}>{ heroBanner.descripcion } </Typography>
              <Typography variant='subtitle2' gutterBottom sx={{color: 'var(--paragraph-color)'}}>Hasta un {heroBanner.descuento}% de descuento</Typography>
              <Button variant='contained' component={Link} href='/offers' sx={{
                backgroundColor: 'var(--button-color)',
                '&:hover': {
                  backgroundColor: 'var(--secondary-color)',
                  color: 'var(--background-color)',
                  '& .textButton': {
                    color: 'var(--background-color)',
                  }
                }
              }}>
                <Typography className='textButton' variant='button' sx={{
                color: 'var(--button-text-color)',
                
                }}>
                  Ver ofertas
                </Typography>
              </Button>
            </Box>  
            
        
    </Box>
  )
}

export default Herobanner
