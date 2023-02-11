import React from 'react';

import Navbar from '../components/Navbar';
import Herobanner from '../components/Herobanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <Herobanner />

      <div className='products-container'>
        {[{producto: 'producto1'},{producto: 'producto2'}, {producto: 'producto3'}].map((product) => product.producto) }
      </div>

      Valoraciones
      
      <Footer /> 
    </>
  )
}

export default Home