import React from 'react';
import styles from './Rating.module.css';
import {AiFillStar} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";

const Rating = ({rating}) => {
  return (
    <div className={styles.rating}>
      {new Array(5).fill('').map((_, i) => {
        return i <= (Math.floor(Number(rating)) - 1) ?  <AiFillStar key={i} className={styles.icon}/> : <AiOutlineStar className={styles.icon} key={i} />
      })}
    </div>
  )
}

export default Rating
