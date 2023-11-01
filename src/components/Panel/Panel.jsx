import React from 'react';
import Search from './Search';
import Select from './Select';
import styles from './Panel.module.css';
import Sort from './Sort';
import { menuOptions } from '../../utils/constants';
import { setType } from '../../features/places-slice';

const Panel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles['left-group']}>
        <Search />
        <Select items={menuOptions} cb={setType}/>
      </div>
      <Sort/>
    </div>
  )
}

export default Panel