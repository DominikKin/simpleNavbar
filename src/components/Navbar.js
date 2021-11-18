import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaHamburger } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Logo from "../images/Vision.png";

function Navbar({ routes }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink exact to="/" className={styles.navLink}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <ul className={isMobileOpen ? styles.navMenuActive : styles.navMenu}>
        {routes.map(({ name, path }) => (
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              exact
              to={path}
              onClick={() => {
                setIsMobileOpen(false);
              }}
            >
              {name}
            </NavLink>
          </li>
        ))}
        {/* <li className={styles.navItem}>
          <NavLink exact to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li> */}
      </ul>
      <div
        className={styles.hamburger}
        onClick={() => {
          setIsMobileOpen(!isMobileOpen);
        }}
      >
        {isMobileOpen ? <FaTimes /> : <FaHamburger />}
      </div>
    </div>
  );
}

export default Navbar;
