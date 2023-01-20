import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  originsDate: '',
  destinationDate: '',
  mapsLibraries: ['places'],
  recommendationRestriction: '',
  placeData: [],
  maps: null,
  journeyTime: 3600,
  placeTime: 3600,
  loginStatus: false,
  userTrip: [],
  placeData: []
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    storeOriginsDate: (state, action) => {
      state.originsDate = action.payload;
    },
    storeDestinationDate: (state, action) => {
      state.destinationDate = action.payload;
    },
    storeLocation: (state, action) => {
      state.location = action.payload;
    },
    storeRecommendation: (state, action) => {
      state.recommendationRestriction = action.payload;
    },
    // storePLaceData: (state, action) => {
    //   state.placeData = [...state.placeData, action.payload];
    // },
    storeMapsLoad: (state, action) => {
      state.maps = action.payload;
    },
    storeTimeJourney: (state, action) => {
      state.journeyTime = action.payload * 3600;
      state.destinationDate = action.payload + ' Hour(s)';
    },
    storeTimePlace: (state, action) => {
      state.placeTime = action.payload * 3600;
    },
    storeLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
    storeUserTrip: (state, action) => {
      state.userTrip = action.payload;
    },
    storePLaceData: (state, action) => {
      state.placeData = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  storeDestinationDate,
  storeLocation,
  storeOriginsDate,
  storeRecommendation,
  storePLaceData,
  storeMapsLoad,
  storeTimePlace,
  storeTimeJourney,
  storeLoginStatus,
  storeUserTrip,
} = tripSlice.actions;

export default tripSlice.reducer;
