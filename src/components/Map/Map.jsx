import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { setChild } from '../../features/map-slice';
import { useDevice } from '../../hooks/use-device';
import {MdLocationPin} from "react-icons/md";
import MapItem from './MapItem';
import { usePlaces } from '../../hooks/use-places';
import { setCoords, setBounds } from '../../features/map-slice';
import Forecast from './Forecast';

const Map = () => {
  const dispatch = useDispatch();
  const coords = useSelector(state => state.map.coords)
  const {status, weather} = useSelector(state => state.map)
  const places = usePlaces();
  const device = useDevice();

  return (
    <div style={{height: "60vh", position: 'relative'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}} 
        defaultCenter={coords} 
        center={coords}
        defaultZoom={14}
        options={''}
        onChange={(e) => {
          dispatch(setCoords({lat: e.center.lat, lng: e.center.lng}))
          dispatch(setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw}))
        }}
        onChildClick={(child) => dispatch(setChild(child))}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {device === 'mobile' 
              ? <MdLocationPin className='map-icon'/> 
              : <MapItem image={place?.photo?.images?.small?.url} name={place.name} rating={place.rating}/>}
          </div>
        ))}
      </GoogleMapReact>
      {status === 'success' && (
        <Forecast 
          icon={weather.condition.icon} 
          desc={weather.condition.text}
          temp_c={weather.temp_c}
          temp_f={weather.temp_f}
          wind={weather.wind_kph}
        />
      )}
    </div>
  )
}

export default Map

