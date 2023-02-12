import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children, title }) {
  return (
    <div className="page-layout">
        <Head>
            <title> {`Akiko - ${title}`} </title>
        </Head>

        <Navbar />

        <header>
            <h1> {title} </h1>
        </header>

        <main>{children}</main>

        <Footer />

    </div>
  );
}