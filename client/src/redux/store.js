import { configureStore, combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cartRedux';
import userReducer from './userRedux';

const rootReducer = combineReducers({ cart: cartReducer, user: userReducer });

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
});
