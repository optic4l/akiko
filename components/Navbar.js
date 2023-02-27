import React from 'react';
import Link from 'next/link';

import { Button, AppBar, Container, Toolbar, MenuItem, Box, Badge } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';



const Navbar = () => {
  return (
    <AppBar position='static' sx={{
      backgroundColor: 'var(--primary-color)',
      color: 'var(--headlines-color)',
    }}>
      <Container maxWidth='xl' > 
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Link href='/'>
              <img src='/Logo/AkikoTrans.png' alt='logo' width='180' height='60'/>
          </Link>
          
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            
          }}>
            <MenuItem><Link href='/productPage'>Productos</Link></MenuItem>
            <MenuItem><Link href='/offers'>Ofertas</Link></MenuItem>
            <MenuItem><Link href='/about'>Nosotros</Link></MenuItem>

            
            <Button 
            variant='contained'
            href='/checkout/' 
            sx={{
              backgroundColor: 'var(--button-color)',
              color: 'var(--button-text-color)',
            }} >
              carrito 
              <Badge badgeContent={2} color='primary' sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: 'var(--button-color)',
                  color: 'var(--button-text-color)',
                }
              }}><ShoppingBagOutlinedIcon /></Badge>
            </Button>
            
            
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar> 
  )
}

export default Navbar
