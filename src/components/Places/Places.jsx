import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {RotatingLines} from  'react-loader-spinner';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from './Card';
import { usePlaces } from '../../hooks/use-places';

const Places = () => {
  const status = useSelector(state => state.places.status);
  const child = useSelector(state => state.map.child);
  const places = usePlaces();
  const slider = useRef();

  useEffect(() => {
    if (child) {
      slider.current?.go(Number(child))
    }
  }, [child])

  return (
    <div className='container'>
      {status === 'loading' && (
        <div className='spinner'>
          <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
        </div>
      )}
      {status === 'success' && (
        <Splide ref={slider} options={{
        perPage: 4,
        drag: "free",
        gap: "10px",
      }}>
      {places.map((pl, i) => (
        <SplideSlide key={i}>
          <Card 
            name={pl.name} 
            image={pl?.photo?.images?.medium?.url} 
            cuisine={pl?.cuisine}
            price={pl?.price_level}
            phone={pl.phone}
            website={pl.website}
            email={pl.email}
            rating={pl.rating}
          />
        </SplideSlide>
      ))}
      </Splide>
      )}
      {status === 'error' && <div><h2>Nothing was found</h2></div>}
    </div>
  )
}

export default Places