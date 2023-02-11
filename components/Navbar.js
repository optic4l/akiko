import React from 'react';
import Link from 'next/link';

import CartButton from './CartButton';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link href='/'>
            <img src='' alt='logo' />
        </Link>
        
        <ul>
            <li><Link href='/productos'>Productos</Link></li>
            <li><Link href='/ofertas'>Ofertas</Link></li>
            <li><Link href='/nosotros'>Nosotros</Link></li>
        </ul>

      <button className='cart-button'>carrito</button>
    </div> 
  )
}

export default Navbar