import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './Panel.module.css';

const Select = ({items, cb}) => {
  const dispatch = useDispatch();

  return (
    <select className={styles.select} onChange={(e) => dispatch(cb(e.target.value))}>
        {items.map((item, i) => (
        <option 
          value={item} 
          key={i}
        >
          {item}
        </option>
      ))}
    </select>
  )
}

export default Select