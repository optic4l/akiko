import Link from 'next/link'
import React from 'react'

import { AppBar, Container, MenuItem, IconButton, Typography } from '@mui/material'
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
        justifyContent: 'space-around',
        backgroundColor: 'var(--background-dark-color)',
        color: '#fffffe',
        height: '300px',
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
                    color: 'var(--paragraph-dark-color)',
                    }}>
                    <MenuItem><Link href='/productPage'>Productos</Link></MenuItem>
                    <MenuItem><Link href='/offers'>Ofertas</Link></MenuItem>
                    <MenuItem><Link href='/about'>Nosotros</Link></MenuItem>
                </Box>
                <Box >
                    <IconButton href='https://www.facebook.com/' sx={{color: 'var(--paragraph-dark-color)'}}><FacebookIcon /></IconButton>
                    <IconButton href='https://www.instagram.com/'sx={{color: 'var(--paragraph-dark-color)'}}><InstagramIcon /></IconButton>
                </Box>
            </Container>
           
        </Container>
        <Typography variant="body2" color="text.secondary" align="center" sx={{color: 'var(--paragraph-dark-color)', paddingLeft: '4rem'}}>
            {'Copyright © '}
            <Link color="inherit" href=''>
                Lucas Droguett
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </AppBar>
  )
}

export default Footer