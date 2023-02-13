import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, AppBar, Container, Toolbar, MenuItem, Box } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';



const Navbar = () => {
  return (
    <AppBar position='static' sx={{
      backgroundColor: 'var(--light-color)',
      color: 'var(--dark-color)',
    }}>
      <Container maxWidth='xl' > 
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Link href='/'>
              <Image src='/Logo/AkikoTrans.png' alt='logo' width='180' height='60'/>
          </Link>
          
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            
          }}>
            <MenuItem><Link href='/productPage'>Productos</Link></MenuItem>
            <MenuItem><Link href='/offers'>Ofertas</Link></MenuItem>
            <MenuItem><Link href='/about'>Nosotros</Link></MenuItem>
        
            <Button variant='contained' onClick={() => {}} sx={{
              backgroundColor: 'var(--alert-color)',
            }} >carrito <ShoppingBagOutlinedIcon /></Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar> 
  )
}

export default Navbar
