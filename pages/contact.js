import React from 'react';
import styles from '../styles/Contact.module.css';
import Circle from '../components/Circle';

function contact() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputS} type="text" placeholder="Username" />
        <input className={styles.inputS} placeholder="Phone" />
        <input className={styles.inputL} placeholder="Email" />
        <input className={styles.inputL} placeholder="Subject" />
        <textarea className={styles.textArea} placeholder="Message" row={6} />
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
}

export default contact;
