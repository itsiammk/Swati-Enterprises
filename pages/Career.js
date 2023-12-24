import React from "react";
import styles from "../styles/Career.module.css";

const Career = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img
            src="/about.png"
            alt="Logo"
            width={600} // Set the desired width for your logo
            height={600} // Set the desired height for your logo
            className={styles.image}
          /> 
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>JOIN THE <br/> SWATI ENTERPRISES TEAM</h1>
          <p className={styles.subtitle}>Are you ready to embark on a journey in the world of metal and construction? Swati Enterprises is looking for talented individuals like you to join our dynamic team. Whether you're a seasoned professional or just starting your career, we have exciting opportunities waiting for you.</p>
        </div>
      </div>
      <div className={styles.list}>
        <h2>Why Choose Swati Enterprises?</h2>
        <p>At Swati Enterprises, we're not just a company; we're a family. When you become a part of our team, you're not just getting a job, you're joining a community of dedicated professionals who support each other and work together towards a common goal.</p>
      </div>
      <div className={styles.list}>
        <h2>Explore Career Opportunities</h2>
        <p>Check out our current job openings below. If you find a position that aligns with your skills and aspirations, we'd love to hear from you.</p>
        <ul>
            <li>Position 1: [Job Title]</li>
            <li>Position 2: [Job Title]</li>
            <li>Position 3: [Job Title]</li>
        </ul>
      </div>
      <div className={styles.list}>
        <h2>Why You'll Love Working Here</h2>
        <p>Endless Opportunities: Swati Enterprises is committed to helping you advance in your career. We provide you with opportunities to learn, grow, and excel.</p>
        <p>Exciting Projects: Get ready to work on a variety of exciting projects that challenge and inspire you.</p>
        <p>Team Collaboration: Our team is built on diversity and teamwork. We value collaboration and believe in the strength of our collective efforts.</p>
        <p>Competitive Compensation: We offer competitive pay and a comprehensive benefits package to ensure you're well taken care of.</p>
      </div>
      <div className={styles.list}>
        <h2>Ready to Take the Leap?</h2>
        <p>If you're interested in any of these roles, here's how you can apply:</p>
        <p>Send your resume and a brief introduction about yourself to [your email address]. Be sure to mention the job title in the subject line.</p>
        <p>If you have any questions or need more information about any of these positions, feel free to reach out to our HR department at [HR contact email or phone number]. We're here to assist you.</p>
        <p>Competitive Compensation: We offer competitive pay and a comprehensive benefits package to ensure you're well taken care of.</p>
      </div>
      <div className={styles.list}>
        <h2>Swati Enterprises is excited to welcome passionate and talented individuals to our team. Join us in shaping the future of metal and construction!</h2>
      </div>
      
    </div>
  );
};

export default Career;
