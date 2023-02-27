import React from 'react'

import {  Box, Button, Card,  CardMedia, Paper, Typography } from '@mui/material'

import { urlFor } from '../lib/client'

const ProductCard = ({product}) => {
  return (
    <Paper elevation={1} sx={{ 
      maxWidth: 400,
    }}>
      <Card>
        <Box sx={{
          position: 'relative',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.16)',
            '& .img': {
              opacity: 0.5,
            },
            '& .botones': {
              opacity: 1,
            }
          }
        }}>
          <CardMedia
          component='img'
          height='400'
          image={urlFor(product.imagen[0]).url()}
          alt={product.nombre}
          sx={{
            
          }}
          />
          <Box className='botones' sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'rgba(217,212,231,0.5)',
            position: 'absolute',
            bottom: '0',
            width: '90%',
            padding: '1rem',
            opacity: 0,
            }}>
            <Button className='btn' variant='contained' sx={{
              backgroundColor: 'var(--button-color)',
              zIndex: 1,
              }}><Typography variant='button' sx={{color: 'var(--button-text-color)'}}>Agregar</Typography>
            </Button>
            <Button className='btn' variant='contained' sx={{
              backgroundColor: 'var(--button-text-color)',
              zIndex: 1,
              }}><Typography variant='button' sx={{color: 'var(--button-color)'}}>Ver más</Typography>
            </Button>
          </Box>
        </Box>
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 0.5rem',
          backgroundColor: 'var(--background-light-color)',
        }}>
          <Typography variant='body1' sx={{color: 'var(--headlines-color) '}}>{product.nombre}</Typography>
          <Typography variant='h6' sx={{color: 'var(--headlines-color) '}}>$ {product.precio}</Typography>
        </Box>
      </Card>
     
    </Paper>
  )
}

export default ProductCard