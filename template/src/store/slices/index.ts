import {combineReducers} from '@reduxjs/toolkit';

const RootReducer = combineReducers({
  // Add reducers here
});

export const persistorWhiteList = [];

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
