import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tripTitle: '',
  basedLocation: {},
  originsDate: '',
  destinationDate: '',
  mapsLibraries: ['places'],
  userPreference: '',
  placeData: [],
  maps: null,
  journeyTime: 3600,
  placeTime: 3600,
  loginStatus: false,
  userTrip: [],
  placeData: [],
  budget: 0,
  expenses: [],
  nearbyRecommendation: [],
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    /* HOME PAGE */
    storeLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
    /* TRIP DATA */
    storeTripTitle: (state, action) => {
      state.tripTitle = action.payload;
    },
    storeOriginsDate: (state, action) => {
      state.originsDate = action.payload;
    },
    storeDestinationDate: (state, action) => {
      state.destinationDate = action.payload;
    },
    storeBasedLocation: (state, action) => {
      state.basedLocation = action.payload;
    },
    storePLaceData: (state, action) => {
      state.placeData = action.payload;
    },
    storeBudget: (state, action) => {
      state.budget = action.payload;
    },
    storeExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    /* TRIP PAGE */
    storeUserPreference: (state, action) => {
      state.userPreference = action.payload;
    },
    storeNearbyRecommendation: (state, action) => {
      state.nearbyRecommendation = action.payload;
    },
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
    /* MY PROFILE PAGE */
    storeUserTrip: (state, action) => {
      state.userTrip = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  storeTripTitle,
  storeDestinationDate,
  storeBasedLocation,
  storeOriginsDate,
  storeUserPreference,
  storePLaceData,
  storeMapsLoad,
  storeTimePlace,
  storeTimeJourney,
  storeLoginStatus,
  storeUserTrip,
  storeBudget,
  storeExpenses,
  storeNearbyRecommendation,
} = tripSlice.actions;

export default tripSlice.reducer;
