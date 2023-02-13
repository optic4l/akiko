import React from 'react';

import { Container } from '@mui/material';

import Herobanner from '../components/Herobanner';
import PageLayout from '../components/PageLayout';

import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  console.log(products);
  return (
    <>
      <PageLayout title='Home'>

      <Herobanner heroBanner={bannerData.length && bannerData[0]}/>

      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {products?.map((product) => product.nombre) }
      </Container>

      Valoraciones
      
      </PageLayout>
      
    </>
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

