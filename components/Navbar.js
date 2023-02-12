import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link href='/'>
            <img src='' alt='logo' />
        </Link>
        
        <ul>
            <li><Link href='/productPage'>Productos</Link></li>
            <li><Link href='/offers'>Ofertas</Link></li>
            <li><Link href='/about'>Nosotros</Link></li>
        </ul>

      <button className='cart-button'>carrito</button>
    </div> 
  )
}

export default Navbar