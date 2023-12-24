import React from "react";
import styles from '../styles/Services.module.css'; // Import your CSS styles
import Link from 'next/link'; // Import the Link component
import { useDashboard } from "@/pages/DashboardProvider";

const Services = () => {
  const services = [
    {
      title: "Erection of Steel Structures and Bridges",
      para: "We're the builders of sturdy foundations and impressive structures that stand the test of time. Our bridges are not just connections; they're masterpieces of engineering."
    },
    {
      title: "Fabrication of All Types of Steel Structures",
      para: "From intricate designs to robust industrial frameworks, we craft steel with precision and artistry. Our steel structures are more than functional; they're works of art.",
    },
    {
      title: "Pre-Engineered Building (PEB)",
      para: "Efficiency meets innovation with our PEB solutions. We create flexible, cost-effective, and sustainable buildings that adapt to your needs.",
    },
    {
      title: "Engineering Consultancy",
      para: "Don't navigate complex projects alone. Our expert advice guides you through the technical terrain, ensuring your projects are executed flawlessly.",
    },
    {
      title: "Detailing (Shop Drawings)",
      para: "Precision is in the details. Our shop drawings leave no room for error, ensuring that every component fits perfectly into your vision.",
    },
    {
      title: "Labor Suppliers for All Types of Construction Work",
      para: "Skilled hands bring visions to life. Our workforce is a pool of talent ready to take on any construction challenge.",
    },
    {
      title: "Logistic and Export Packing Consultancy Services:",
      para: "We don't just build; we also ensure your creations reach their destinations unscathed. Our logistics and export packing services keep your projects safe and sound during transit.",
    },

  ];

  const {theme, setTheme} = useDashboard()

  return (
    <div className={`${styles.container} ${theme && styles.containerTheme}`}>
      <h1 className={styles.heading}>Our Services</h1>

      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <div className={styles.cardcontainer}>
                <div className={styles.cardbody}>
                  <div className={styles.cardcontent}>
                    <div className={styles.icon}></div>
                    <span className={styles.cardtitle}>{service.title}</span>
                    <span className={styles.cardauthor}></span>
                  </div>
                  <div className={styles.cardmeta}>
                    <span className={styles.cardtag}>&copy; Swati Enterprises</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
