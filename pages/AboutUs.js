import React from "react";
import styles from "../styles/AboutUs.module.css";
import { useDashboard } from "./DashboardProvider";

const AboutUs = () => {
  const {theme, setTheme} = useDashboard()

  return (
    <div className={`${styles.container} ${theme && styles.containerTheme}`}>
        <div className={styles.top}>
        <div className={styles.topimg}>
                <img
                src="/aboutus.png"
                alt="Logo"
                width={300} // Set the desired width for your logo
                height={250} // Set the desired height for your logo
                className={styles.image}
                />
            </div>
            <div className={styles.left}>
                <h1 className={styles.title}>About Swati Enterprises</h1>
                <p className={styles.paragraph}>
                    Welcome to the world of metal magic, where we've honed our skills for over 12 years. We're not your ordinary metal treatment company; we're small but mighty, specializing in erecting sturdy steel structures, crafting all sorts of steel wonders, and creating advanced Pre-Engineered Buildings (PEB). <br/>But that's not all! We're also your go-to experts for engineering advice, detailed shop drawings, and providing skilled workers for various construction tasks. Oh, and we even help with logistics and export packing – talk about versatile! <br/>
                    But what truly sets us apart is our expertise in <strong>BRIDGES and FOB</strong>. We are the architects of connections that transcend time, where each bridge is not just a physical structure but a testament to our engineering prowess. Our secret ingredients? A highly skilled team, state-of-the-art facilities, and an unwavering commitment to making your metal dreams come true. So, whether you're building dreams or bridges, we're here to turn your vision into reality.
                </p>
            </div>
            <div className={styles.right}>
                <img
                src="/aboutus.png"
                alt="Logo"
                width={500} // Set the desired width for your logo
                height={500} // Set the desired height for your logo
                className={styles.image}
                />
            </div>
        </div>
      <div className={`${styles.second} ${theme && styles.secondTheme}`}>

      <h2 className={styles.subtitle}>Our Expertise</h2>
      <ul className={styles.list}>
        <li>Erection of steel structures and bridges</li>
        <li>Fabrication of all types of steel structures</li>
        <li>Pre-Engineered Building (PEB)</li>
        <li>Engineering Consultancy</li>
        <li>Detailing (Shop Drawings)</li>
        <li>Labor suppliers for all types of construction work</li>
        <li>Logistic and Export packing consultancy services</li>
      </ul>
      <h2 className={styles.subtitle}>Our Achievements</h2>
      <p className={styles.paragraph}>
        Swati Enterprises boasts a technically-proficient team supported by a
        highly-motivated and skilled workforce. With over 12 years of experience
        in erection, fabrication, and related fields, we are well-equipped to
        handle projects of any scale. Our list of esteemed clients includes:
      </p>
      <ul className={styles.list}>
        <li>AFCONS INFRASTRUCTURE LIMITED</li>
        <li>DILIP BUILDCON LIMITED</li>
        <li>METALFAB HIGHTECH PVT. LTD.</li>
        <li>RENUKA EQUIPMENTS PVT. LTD.</li>
        <li>And many more...</li>
      </ul>
      <h2 className={styles.subtitle}>Our Projects</h2>
      <p className={styles.paragraph}>
        Swati Enterprises has successfully completed various projects, such as:
      </p>
      <ul className={styles.list}>
        <li>Cotton Market Metro Station - Nagpur</li>
        <li>SSP PLANT (INDORAMA) Butibori Nagpur-MH</li>
        <li>Railway over bridge (ROB) – Tirupati, Andhar Pradesh</li>
        <li>Wardha-Nanded New B G, Railway over bridge (ROB) – Wardha, MH</li>
        <li>Prajapati Nagar Station FOB for South Entry-Exit</li>
        <li>Four Lane from Km 42+00 to 80+00 of Dodballapur bypass to Hoskote section of NH-648 (old NH 207), Karnataka</li>
      </ul>
      <h2 className={styles.subtitle}>Upcoming Projects</h2>
      <p className={styles.paragraph}>
        We are excited to be working on upcoming projects, including:
      </p>
      <ul className={styles.list}>
        <li>ROB (36 Mtrs & 18 Mtrs span) on Wardha-Nanded New B G, Railway over bridge (ROB) – Yavatmal, MH</li>
        <li>Bow String Girder 42 Mtrs (RDSO) at Chipurpalle (ROB 1451), Vishakhapatnam, AP</li>
      </ul>
      <h2 className={styles.subtitle}>Our Capabilities</h2>
      <p className={styles.paragraph}>
        Our capabilities include a wide range of fabrication and erection work,
        supported by advanced tools, machinery, and skilled manpower. With a
        focus on safety and quality, Swati Enterprises is your trusted partner
        for engineering solutions.
      </p>
      <h2 className={styles.subtitle}>Contact Us</h2>
      <p className={styles.paragraph}>
        For inquiries and partnership opportunities, please contact our key
        contacts:
      </p>
      <div className={styles.contacts}>
        <div>
          <h3>Mr. Deepak Kumar Verma</h3>
          <p>
            Partner<br />
            Mobile: +91-9971185889<br />
            Email: info.senterprises1122@gmail.com
          </p>
        </div>
        <div>
          <h3>Mr. Laxminarayan H Domkundwar</h3>
          <p>
            Partner<br />
            Mobile: +91-9022587912<br />
            Email: info.senterprises1122@gmail.com
          </p>
        </div>
      </div>
      <p className={styles.paragraph}>Thank you for choosing Swati Enterprises!</p>
      </div>
    </div>
  );
};

export default AboutUs;
