import axios from "axios";

export const getPlaces = async ({ sw, ne, type }) => {
  const typeForFetching = `${type.slice(0, 1).toLowerCase()}${type.slice(1)}`;
  const URL = `https://travel-advisor.p.rapidapi.com/${typeForFetching}/list-in-boundary`;
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_TRAVEL_API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  return axios.get(URL, options);
};

export const getWeather = async ({ lat, lng }) => {
  const URL = "https://weatherapi-com.p.rapidapi.com/current.json";
  const options = {
    params: {
      q: `${lat},${lng}`,
    },
    headers: {
      "X-RapidAPI-Key": "a7aa304029msh9aba631b8aa813dp1bb625jsn4ae729d67b70",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  return axios.get(URL, options);
};
