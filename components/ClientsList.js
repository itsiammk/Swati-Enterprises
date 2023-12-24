// components/ClientsList.js

import React, { useEffect } from 'react';
import styles from '../styles/ClientsList.module.css'; // Import your CSS module
import { useDashboard } from '@/pages/DashboardProvider';

const clientsWithLogos = [
  {
    name: 'AFCONS INFRASTRUCTURE LIMITED',
    logo: '/img1.jfif',
  },
  {
    name: 'DILIP BUILDCON LIMITED',
    logo: '/img2.jfif',
  },
  {
    name: 'METALFAB HIGHTECH PVT. LTD.',
    logo: '/img3.jfif',
  },
  {
    name: 'RENUKA EQUIPMENTS PVT. LTD.',
    logo: '/img4.jfif',
  },
  {
    name: 'NIKHIL CONSTRUCTION GROUP PVT. LTD.',
    logo: '/img5.jfif',
  },
  {
    name: 'BBG INFRASTRUCTURE PVT. LTD.',
    logo: '/img1.jfif',
  },
  {
    name: 'HARSHITHA CONSTRUCTIONS',
    logo: '/img2.jfif',
  },
  
  // Add more clients and their logos as needed
];

const ClientsList = () => {
  const {theme, setTheme} = useDashboard()
  useEffect(() => {
    const scrollContainer = document.querySelector(`.${styles.scrollContainer}`);

    if (scrollContainer) {
      // Calculate the total width of the scrollable content
      const scrollableWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      let scrollPosition = 0;
      const scrollSpeed = 1; // Adjust the scroll speed as needed

      // Create an animation that continuously scrolls to the right
      const scrollRight = () => {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollableWidth) {
          scrollPosition = 0;
        }
        scrollContainer.scrollTo(scrollPosition, 0);
      };

      // Start the animation
      const scrollInterval = setInterval(scrollRight, 30); // Adjust the scroll interval for the desired speed

      // Stop the animation when the component unmounts
      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, []);

  return (
    <div className={`${styles.container} ${theme && styles.containerTheme}`}>
      <div className={`${styles.nine} ${theme && styles.nineTheme}`}>
        <h1>Our Valued Clients</h1>
        <span>We are proud to have worked with the following organizations in the industry.</span>
      </div>

      <div className={styles.scrollContainer}>
        <ul className={styles.clientList}>
          {clientsWithLogos.map((client, index) => (
            <li key={index} className={styles.clientItem}>
              <div className={styles.logoContainer}>
                <img
                  src={client.logo}
                  alt={client.name}
                  width={100} // Set your desired width for the logo
                  height={100} // Set your desired height for the logo
                  className={styles.img}
                />
              </div>
              <div className={`${styles.clientName} ${theme && styles.clientNameTheme}`}>{client.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientsList;