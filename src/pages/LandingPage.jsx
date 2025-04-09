// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../components/Landing/Header';
import Hero from '../components/Landing/Hero';
import Products from '../components/Landing/Product'
import Industries from '../components/Landing/Industries'
import Pricing from '../components/Landing/Pricing'
import Resource from '../components/Landing/Resources'
import Faqs from '../components/Landing/Faqs'
import Footer from '../components/Landing/Footer'

function LandingPage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        <Hero />
        <section className="py-1 text-center">
          <Products />
        </section>
        <section className="py-1 text-center bg-white">
          <Industries />
        </section>
        <section className="py-1 text-center">
          <Pricing />
        </section>
        <section className="py-1 text-center">
          <Resource />
        </section>
        <section className="py-1 text-center">
          <Faqs />
        </section>
        <section className="py-1 text-center bg-white">
          <Footer />
          </section>
      </main>
    </div>
  );
}

export default LandingPage;