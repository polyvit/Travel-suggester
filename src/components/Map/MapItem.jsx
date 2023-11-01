import React from 'react';
import styles from './MapItem.module.css';
import Rating from '../Rating/Rating';

const MapItem = ({image, name, rating}) => {
  return (
    <div className={styles.container}>
      <img src={image ? image : "https://dummyimage.com/600x400/a9a9a9/fff.jpg&text=No+Photo"} alt="image" className={styles.image} />
      <span className={styles.text}>{name}</span>
      <Rating rating={rating}/>
    </div>
  )
}

export default MapItem

