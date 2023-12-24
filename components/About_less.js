import React from "react";
import styles from '../styles/AboutLess.module.css'; // Import your CSS styles
import Link from 'next/link'; // Import the Link component
import { useDashboard } from "@/pages/DashboardProvider";

const AboutLess = () => {
  const {theme, setTheme} = useDashboard()

  return (
    <div id="aboutless" className={`${styles.aboutContainer} ${theme && styles.aboutContainerTheme}`}>
      <div className={styles.imageContainer}>
        {/* Replace 'your-image.jpg' with the path to your image */}
        <img 
          src="/img1.jfif"
          alt="Company Image"
          width={800} // Adjust the width as needed
          height={500} // Adjust the height as needed
          className={styles.companyImage}
        />
      </div>
      <div className={`${styles.textContent} ${theme && styles.textContentTheme}`}>
        <h2>SWATI ENTERPRISES</h2>        
        <p>
        Swati Enterprises, a thriving presence in the metal treatment industry, brings over 12 years of invaluable experience as a dedicated MSME entity. Our journey from a modest beginning to a prominent position has been marked by unwavering commitment and expertise. We specialize in a diverse spectrum of services, encompassing steel structure erection, fabrication, Pre-Engineered Buildings (PEBs), engineering consultancy, detailing, and labor supply for construction. Our success is anchored in a highly skilled workforce, technical proficiency, and a client roster that includes industry giants like AFCONS INFRASTRUCTURE LIMITED, DILIP BUILDCON LIMITED, and more. At Swati Enterprises, our pledge to unwavering quality and excellence remains the driving force behind every project we undertake.
        </p>
        <Link href="/AboutUs"> {/* Wrap the button with Link */}
          <div className={styles.button}>Read More</div>
        </Link>
      </div>
    </div>
  );
};

export default AboutLess;
