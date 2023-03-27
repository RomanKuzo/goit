import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import repositories from './slices/repositories';

const appReducer = combineReducers({
  repositories,
});

const store = configureStore({
  devTools: {
    name: `GoIT`,
  },
  reducer: appReducer,
});

export default store;
