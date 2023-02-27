import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

export default function PageLayout({ children, pageTitle }) {
  console.log(pageTitle)
  return (
    <Box sx={{
      backgroundColor: 'var(--background-light-color)',
    }}>
        <Head>
            <title> Akiko - {pageTitle} </title>
        </Head>

        <Navbar />
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh',
        }}>
          <main>{children}</main>

          <Footer />
        </Box>

    </Box>
  );
}