import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Panel.module.css';
import { setSortIndex } from '../../features/places-slice';

const sortVariants = ['3.0', '4.0', '5.0']

const Sort = () => {
  const dispatch = useDispatch();
  const sortIndex = useSelector(state => state.places.sortIndex)
  const handleClick = (i) => {
    dispatch(setSortIndex(i))
  }

  return (
    <div className={styles.sort}>
      {sortVariants.map((item, i) => (
        <div className={`${styles.item} ${sortIndex === i ? styles.active : ''}`} onClick={() => handleClick(i)} key={i}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Sort