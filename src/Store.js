import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './state/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
