import React from 'react';
import styles from './Header.module.css';
import LOGO from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <h2 className={styles.title}>Travel</h2>
        <img src={LOGO} alt="logo" className={styles.img} />
        <h2 className={styles.title}>Suggester</h2>
      </div>
    </header>
  )
}

export default Header