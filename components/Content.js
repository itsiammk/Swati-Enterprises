import React, { useState, useEffect } from "react";
import styles from "../styles/Content.module.css";
import Link from "next/link";

const images = [
  "/img1.jfif",
  "/img2.jfif",
  "/img3.jfif",
  "/img4.jfif",
  "/img5.jfif",
];

const Content = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration for image switch

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.content}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className={styles.textOverlay}>
          <h2>
            Welcome To <br />
            SWATI ENTERPRISES
          </h2>
          <Link href="/#aboutless">
            <div className={styles.button}>Explore</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
