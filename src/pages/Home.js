import React from "react";
import styles from "./Page.module.css";
import {
  FaCarrot,
  FaFaucet,
  FaHorse,
  FaKiwiBird,
  FaSpinner,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import blob1 from "../images/blob1-01.png";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h2>Your vision</h2>
          <h2 className={styles.h2purp}>Our drive</h2>
          <p>
            Here at Vision Marketing Agency, we provide captivating experiences
            that create everlasting bond between your business and your
            customers.
          </p>
          <h4 className={styles.clientTitle}>Our clients</h4>
          <div className={styles.ourClients}>
            <div className={styles.client}>
              <FaCarrot />
              18carrot
            </div>
            <div className={styles.client}>
              <FaFaucet />
              DrippyDrip
            </div>
            <div className={styles.client}>
              <FaSpinner />
              Laziest Logo
            </div>
            <div className={styles.client}>
              <FaHorse />
              OfHorse
            </div>
            <div className={styles.client}>
              <FaKiwiBird />
              KiiWii
            </div>
          </div>
          <div className={styles.findUs}>
            <FaInstagram className={styles.icon} />
            <FaFacebook className={styles.icon} />
            <FaTwitter className={styles.icon} />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.images}>
            <img src={blob1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
