import React from 'react';
import StyledShakaBackground from './ShakaBackground';
import Header from './Header';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <StyledShakaBackground />
      <Header page="home" />
    </Layout>
  );
};

export default Home;
