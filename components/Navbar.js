import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDashboard } from "@/pages/DashboardProvider";

const Navbar = () => {
  const {theme, setTheme} = useDashboard()
  const [open, setOpen] = useState(false);
  const [down, setDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const currentRoute = router.pathname;
    const shouldSetScrolled = currentRoute !== "/"; // Add more routes if needed
    if (window.scrollY === 0) {
      setIsScrolled(true);
    } 
    if(shouldSetScrolled){
      setIsScrolled(true)
    }   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  console.log(router.pathname === "/ServicesMain")
  const handleTabClick = () => {
    // Check if the user is not at the top of the page
    setIsScrolled(true);
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""} ${theme && isScrolled && styles.themeContainer} ${theme && styles.mobileThemeContainer}`}>
      <Link href="/">
        <img
          src="/logo.png"
          alt="Logo"
          width={1200} // Set the desired width for your logo
          height={600} // Set the desired height for your logo
          className={`${styles.img} ${isScrolled ? styles.scrolledimg : ""}`}
        />
        <div
          className={`${styles.slogan} ${
            isScrolled ? styles.scrolledslogan : ""
          }`}
        >
          <div className={styles.sloganText}></div>
        </div>
      </Link>
      <ul className={styles.list}>
        <li
          className={`${styles.listItem} ${
            isScrolled ? styles.scrolledlist : ""
          } ${theme && styles.themeListItem}`}
        >
          <Link href="/" onClick={handleTabClick}>
            HOME
          </Link>
        </li>
        <li
          className={`${styles.listItem} ${
            isScrolled ? styles.scrolledlist : ""
          } ${theme && styles.themeListItem}`}
        >
          <Link href="/AboutUs" onClick={handleTabClick}>
            ABOUT US
          </Link>
        </li>
        <li
          className={`${styles.listItem} ${
            isScrolled ? styles.scrolledlist : ""
          } ${theme && styles.themeListItem}`}
        >
          <Link href="/ServicesMain" onClick={handleTabClick}>
            SERVICES
          </Link>
        </li>
        <li
          className={`${styles.listItem} ${
            isScrolled ? styles.scrolledlist : ""
          } ${theme && styles.themeListItem}`}
        >
          <Link href="/Career" onClick={handleTabClick}>
            CAREER
          </Link>
        </li>
        <li
          className={`${styles.listItem} ${
            isScrolled ? styles.scrolledlist : ""
          } ${theme && styles.themeListItem}`}
        > 
          {/* Add a click handler to toggle the projects dropdown */}
          <div className={`${styles.listItem} ${
            isScrolled ? styles.scrolledlist : ""
          } ${theme && styles.themeListItem}`} onClick={() => {setProjectsOpen(!projectsOpen)} }>
            PROJECTS <div className={`${styles.down} ${theme && styles.downTheme}`}></div> 
            {projectsOpen && (
              <ul className={`${styles.subMenu} ${
            isScrolled ? styles.scrolledmenu : ""} ${theme && styles.subMenuTheme}`}>
                <li className={`${styles.subMenuItem} ${theme && styles.subMenuItemTheme}`}>
                  <Link href="/">COMPLETED</Link>
                </li>
                <li className={`${styles.subMenuItem} ${theme && styles.subMenuItemTheme}`}>
                  <Link href="/">ONGOING</Link>
                </li>
                <li className={`${styles.subMenuItem} ${theme && styles.subMenuItemTheme}`}>
                  <Link href="/">UPCOMING</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li
          className={`${styles.listItem1} ${styles.listItem} ${
            isScrolled ? styles.scrolledlist1 : ""
          }`}
        >
          <Link href="/contact" onClick={handleTabClick}>
            Contact Us
          </Link>
        </li>
        {true && <button onClick={() => {setTheme(!theme)}}>
          {theme ? 'White' : 'Black'}
        </button>}
      </ul>
      
      <div className={`${styles.hamburger} ${theme && styles.containerHamburger}`} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={`${styles.menu} ${theme && styles.containerMenu}`}
        style={{ right: open ? "0px" : "-100vw" }}
      >
        <li className={styles.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/AboutUs">About Us</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/ServicesMain">Services</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/Career">Career</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
