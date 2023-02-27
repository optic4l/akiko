import React from 'react';

import { Container, Box, Typography, colors } from '@mui/material';

import Herobanner from '../components/Herobanner';
import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
      <PageLayout pageTitle='Hero'>

        <Herobanner heroBanner={bannerData.length && bannerData[1]}/>

        <Box sx={{
          backgroundColor: '#fffffe',
          padding: '1rem',
          margin: '3rem 2rem 3rem 2rem',
          borderRadius: '1rem',
          textAlign: 'center',
        }}>

        <Typography variant='h3' component='h1' 
          sx={{
           textAlign: 'center', 
           margin: '1rem 0 1rem 0', 
           padding: '1rem 0 1rem 0',
           color: 'var(--headlines-color)',
          }}>
            Productos Destacados
        </Typography>

        <Container sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: '40px',
          padding: '1rem'

        }}>
          {products?.map((product) => {
        
            return (
              <ProductCard key={product._id} product={product} /> 
            )
          }) }
        </Container>
      </Box>
        Valoraciones
        
      </PageLayout>
  )
}

export const getStaticProps = async () => {
  const query ='*[_type == "producto"]';
  const products = await client.fetch(query);

  const bannerQuery ='*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home

