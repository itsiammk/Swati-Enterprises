import React from "react";
import styles from "../styles/ServicesMain.module.css";

const ServicesMain = () => {
  const services = [
    {
      title: "Erection of Steel Structures and Bridges",
      para:
        "We're the builders of sturdy foundations and impressive structures that stand the test of time. Our bridges are not just connections; they're masterpieces of engineering.",
      image: "/bridge.png",
    },
    {
      title: "Fabrication of All Types of Steel Structures",
      para:
        "From intricate designs to robust industrial frameworks, we craft steel with precision and artistry. Our steel structures are more than functional; they're works of art.",
      image: "/img2.jfif",
    },
    {
      title: "Pre-Engineered Building (PEB)",
      para:
        "Efficiency meets innovation with our PEB solutions. We create flexible, cost-effective, and sustainable buildings that adapt to your needs.",
      image: "/img3.jfif",
    },
    {
      title: "Engineering Consultancy",
      para:
        "Don't navigate complex projects alone. Our expert advice guides you through the technical terrain, ensuring your projects are executed flawlessly.",
      image: "/img4.jfif",
    },
    {
      title: "Detailing (Shop Drawings)",
      para:
        "Precision is in the details. Our shop drawings leave no room for error, ensuring that every component fits perfectly into your vision.",
      image: "/img5.jfif",
    },
    {
      title: "Labor Suppliers for All Types of Construction Work",
      para:
        "Skilled hands bring visions to life. Our workforce is a pool of talent ready to take on any construction challenge.",
      image: "/img2.jfif",
    },
    {
      title: "Logistic and Export Packing Consultancy Services",
      para:
        "We don't just build; we also ensure your creations reach their destinations unscathed. Our logistics and export packing services keep your projects safe and sound during transit.",
      image: "/img1.jfif",
    },
  ];
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.h1}>SERVICES</h1>
          <p className={styles.p}>Provided by Swati Enterprises</p>
        </div>
        <div className={styles.left}>
          <img
              src="/service.png"
              alt="Logo"
              width={500} // Set the desired width for your logo
              height={500} // Set the desired height for your logo
              className={styles.logo}
            />
        </div>
      </div>
      {services.map((service, index) => (
        <div
          className={`${styles.serviceItem} ${
            index % 2 === 0 ? styles.evenRow : styles.oddRow
          }`}
          key={index}
        >
          {index % 2 === 0 ? (
            <>
              <div className={styles.serviceImage}>
                <img
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className={styles.serviceText}>
                <h2>{service.title}</h2>
                <p>{service.para}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.serviceText}>
                <h2>{service.title}</h2>
                <p>{service.para}</p>
              </div>
              <div className={styles.serviceImage}>
                <img
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                />
              </div>
            </>
          )}
        </div>
      ))}
      <div className={styles.space}></div>
    </div>
  );
};

export default ServicesMain;
