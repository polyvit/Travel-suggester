import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {AiOutlineSearch} from "react-icons/ai";
import styles from './Panel.module.css';
import { setCoords } from '../../features/map-slice';
import { useDispatch } from 'react-redux';

const Search = () => {
  const [autocomplete, setAutocomplete] = useState(null);
  const dispatch = useDispatch();

  const onLoad = (auto) => setAutocomplete(auto);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    dispatch(setCoords({lat, lng}))
  }

  return (
    <div className={styles.search}>
            <AiOutlineSearch className={styles.icon}/>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter location"
                />
              </Autocomplete>
          </div>
  )
}

export default Search