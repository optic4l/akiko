import React from 'react';


import Herobanner from '../components/Herobanner';
import PageLayout from '../components/PageLayout';

const Home = () => {
  return (
    <>
      <PageLayout title='Home'>

      <Herobanner />

      <div className='products-container'>
        {[{producto: 'producto1'},{producto: 'producto2'}, {producto: 'producto3'}].map((product) => product.producto) }
      </div>

      Valoraciones
      
      </PageLayout>
      
    </>
  )
}

export default Home