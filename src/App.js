import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Panel from "./components/Panel/Panel";
import Places from "./components/Places/Places";
import { fetchWeather, setCoords } from "./features/map-slice";
import { fetchPlaces } from "./features/places-slice";

function App() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.places.type);
  const { coords, bounds } = useSelector((state) => state.map);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(setCoords({ lat: latitude, lng: longitude }));
      }
    );
  }, []);

  useEffect(() => {
    if (Object.keys(coords).length && Object.keys(bounds).length) {
      dispatch(fetchPlaces({ sw: bounds.sw, ne: bounds.ne, type }));
      dispatch(fetchWeather({ lat: coords.lat, lng: coords.lng }));
    }
  }, [coords, bounds, type]);

  return (
    <>
      <Header />
      <Map />
      <div className="main">
        <Panel />
        <Places />
      </div>
    </>
  );
}

export default App;
