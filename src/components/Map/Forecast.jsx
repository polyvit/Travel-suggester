import React from 'react';
import styles from './Forecast.module.css';

const Forecast = ({icon, desc, temp_c, temp_f, wind}) => {
  return (
    <div className={styles.forecast}>
        <img src={icon} alt="icon" className={styles.icon} />
        <p className={styles.title}>{desc}</p>
        <div className={styles.data}>
          <p>Temp °C:</p>
          <p>{temp_c}</p>
        </div>
        <div className={styles.data}>
          <p>Temp ℉:</p>
          <p>{temp_f}</p>
        </div>
        <div className={styles.data}>
          <p>Wind (kph):</p>
          <p>{wind}</p>
        </div>
      </div>
  )
}

export default Forecast