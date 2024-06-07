import { configureStore } from '@reduxjs/toolkit';

//Component
import missionsReducer from './state/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
