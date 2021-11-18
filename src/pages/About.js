import React from "react";
import styles from "./Page.module.css";
import about from "../images/About-01.png";

function About() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.images}>
            <img src={about} alt="" />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h2>Meet our team</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            dolorem, doloremque ullam quo tenetur harum quisquam. Excepturi
            quam, totam perspiciatis dolorem similique nostrum molestiae aliquid
            tenetur delectus repellendus nisi voluptas laborum porro deserunt
            enim neque nulla, fuga blanditiis sint praesentium modi
            exercitationem! Numquam ducimus sint aut cum a qui saepe!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
