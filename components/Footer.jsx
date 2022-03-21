import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40" height="40" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          italimbd@gmail.com <br /> +8801860060068
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          &#9400;2022 ALIM INTERACTIVE, <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}

export default Footer;
