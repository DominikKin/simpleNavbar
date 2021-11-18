import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Page.module.css";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("", "", form.current, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form ref={form} onSubmit={sendEmail} className={styles.formFields}>
            <label className={styles.inputLabel}>Name</label>
            <input type="text" name="user_name" className={styles.inputField} />
            <label className={styles.inputLabel}>Email</label>
            <input
              type="email"
              name="user_email"
              className={styles.inputField}
            />
            <label className={styles.inputLabel}>Message</label>
            <textarea name="message" className={styles.inputField} />
            <input type="submit" value="Send" className={styles.inputBtn} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
