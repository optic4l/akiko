import Link from 'next/link'
import React from 'react'

import { AppBar, Container, MenuItem, IconButton } from '@mui/material'
import Image from 'next/image'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/system';


const Footer = () => {
  return (
    <AppBar position='static' sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'var(--dark-color)',
        color: 'var(--light-color)',
    }}>
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}>   
                <Image src='/Logo/AkikoTrans.png' alt='logo' width='160' height='60' />
            
                <Box sx={{
                    display: 'flex',
                    }}>
                    <MenuItem><Link href='/productPage'>Productos</Link></MenuItem>
                    <MenuItem><Link href='/offers'>Ofertas</Link></MenuItem>
                    <MenuItem><Link href='/about'>Nosotros</Link></MenuItem>
                </Box>
                <Box >
                    <IconButton href='https://www.facebook.com/'><FacebookIcon /></IconButton>
                    <IconButton href='https://www.instagram.com/'><InstagramIcon /></IconButton>
                </Box>
            </Container>
           
        </Container>
        <p>2023 Lucas Droguett, All rights reserverd</p>
    </AppBar>
  )
}

export default Footer