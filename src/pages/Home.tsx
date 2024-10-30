import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import FeaturedResearch from '../components/FeaturedResearch';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <PageTransition>
      <main>
        <Hero />
        <FeaturedResearch />
        <Partners />
        <Newsletter />
      </main>
    </PageTransition>
  );
};

export default Home;