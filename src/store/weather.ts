import { createSlice } from '@reduxjs/toolkit';

const initialWeatherState = {
  weatherCurrent: null,
  weatherForecast: null,
  weatherSearch: false,
  weatherSearchCompleted: '',
  weatherIsLoading: true,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialWeatherState,
  reducers: {
    weatherCurrent(state, action) {
      state.weatherCurrent = action.payload;
    },
    weatherForecast(state, action) {
      state.weatherForecast = action.payload;
    },
    weatherSearch(state, action) {
      state.weatherSearch = action.payload;
    },
    weatherSearchCompleted(state, action) {
      state.weatherSearchCompleted = action.payload;
    },
    weatherIsLoading(state, action) {
      state.weatherIsLoading = action.payload;
    },
  },
});
export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
