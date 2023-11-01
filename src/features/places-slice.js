import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlaces } from "../api";

export const fetchPlaces = createAsyncThunk(
  "places, fetchPlaces",
  async (params, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await getPlaces(params);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  status: "loading",
  items: [],
  type: "Restaurants",
  sortIndex: 0,
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setType(state, { payload }) {
      state.type = payload;
    },
    setSortIndex(state, { payload }) {
      state.sortIndex = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPlaces.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.items = payload;
    });
    builder.addCase(fetchPlaces.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setType, setSortIndex } = placesSlice.actions;
export default placesSlice.reducer;

export const selectActualPlaces = (items, sort = 3) => {
  return items.filter((item) => item.name && Number(item.rating) >= sort);
};
