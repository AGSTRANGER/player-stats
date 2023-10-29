import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './slices/playersSlice';
import matchesReducer from './slices/matchesSlice';

const store = configureStore({
  reducer: {
    players: playersReducer,
    matches: matchesReducer,
  },
});

export default store;
