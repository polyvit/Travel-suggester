import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather } from "../api";

export const fetchWeather = createAsyncThunk(
  "map, fetchWeather",
  async (params, { rejectWithValue }) => {
    try {
      const {
        data: { current },
      } = await getWeather(params);
      return current;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  status: "loading",
  weather: {},
  child: null,
  coords: {},
  bounds: {},
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setChild(state, { payload }) {
      state.child = payload;
    },
    setCoords(state, { payload }) {
      state.coords = payload;
    },
    setBounds(state, { payload }) {
      state.bounds = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = "loading";
      state.weather = {};
    });
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.weather = payload;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.status = "error";
      state.weather = {};
    });
  },
});

export const { setChild, setCoords, setBounds } = mapSlice.actions;
export default mapSlice.reducer;
