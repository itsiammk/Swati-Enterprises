// pages/index.js (or any other page)
import React from 'react';
import Navbar from '../components/Navbar';
import Content from '@/components/Content';
import styles from './Home.module.css'; // Create a CSS module for page-specific styles
import AboutLess from '@/components/About_less';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import ClientsList from '@/components/ClientsList';

const Home = () => {
  return (
    <div className={styles.content}>
      <Content />
      <AboutLess />
      <Services />
      <Gallery />
      <ClientsList />
    </div>
  );
};

export default Home;
