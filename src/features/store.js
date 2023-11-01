import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./places-slice";
import mapReducer from "./map-slice";

const store = configureStore({
  reducer: {
    places: placesReducer,
    map: mapReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
