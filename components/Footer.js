import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <img src='' alt='logo' />
            <ul>
                <li><Link href='/productos'>Productos</Link></li>
                <li><Link href='/ofertas'>Ofertas</Link></li>
                <li><Link href='/nosotros'>Nosotros</Link></li>
            </ul>
            <div className='icons-container'>
                <ul>
                    <li><a href='https://www.facebook.com/'>Facebook</a></li>
                    <li><a href='https://www.instagram.com/'>Instagram</a></li>
                </ul>
            </div>
        </div>
        <p>2023 Lucas Droguett, All rights reserverd</p>
    </div>
  )
}

export default Footer