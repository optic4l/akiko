import React from 'react'
import Image from 'next/image'

import { useNextSanityImage } from 'next-sanity-image'

import { Container, Button } from '@mui/material'

import { urlFor, client } from '../lib/client'
import { Box } from '@mui/system'


const Herobanner = ({ heroBanner } ) => {

  const imageProps = useNextSanityImage(
		client,
		heroBanner.imagen
	);

  return (
    <Box sx={{
      position: 'relative',
      }}>
      <Box sx={{
        
        }}>
        <img src={urlFor(heroBanner.imagen)} alt='imagen banner' width={'100%'} height={500}/>
      </Box>
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          color: 'var(--dark-color)',
        }}>
            <h1>{ heroBanner.titulo } </h1>
            <p>{ heroBanner.descripcion } </p>
            <p>Hasta un {heroBanner.descuento}% de descuento</p>
            <Button variant='contained' sx={{
              backgroundColor: 'var(--alert-color)',
              color: 'var(--light-color)',
            }}>Ver ofertas</Button>
        </Box>
    </Box>
  )
}

export default Herobanner
