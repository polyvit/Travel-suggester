import React from 'react';
import styles from './Card.module.css';
import {AiTwotonePhone} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";
import {TbWorldWww} from "react-icons/tb";

const Card = ({name, image, price, cuisine, phone, website, email, rating}) => {

  return (
   <div className={styles.card}>
      <img className={styles.photo} src={image ? image : "https://dummyimage.com/600x400/a9a9a9/fff.jpg&text=No+Photo"} alt="Photo" />
      <div className={styles.info}>
        <h2 className="base-title">{name ? name : 'Unknown Name'}</h2>
        {price && (
          <div className={styles.box}>
            <p>Price</p>
            <p>{price}</p>
          </div>
        )}
        {rating && (
          <div className={styles.box}>
            <p>Rating</p>
            <p>{rating}</p>
          </div>
        )}
        {cuisine && (
          <div className={styles.cuisine}>
            {cuisine.slice(0, 5).map((item,i) => <div className={styles.item} key={i}>{item.name}</div>)}
          </div>
        )}
        <div className={styles.contacts}>
          <a href={phone} target="_blank"><AiTwotonePhone/></a>
          <a href={email} target="_blank"><MdAlternateEmail/></a>
          <a href={website} target="_blank"><TbWorldWww/></a>
        </div>
      </div>
    </div>
  )
}

export default Card
